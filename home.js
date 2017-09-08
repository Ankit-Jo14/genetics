     $(function() {
         console.log("ready!");
         var dataTable = [];
         var pedigreeNodes = [];
         var table = [];
         var filteredData = [];
         var i = 0,
             duration = 750,
             root, margin, treemap, svg, g, identifier = 0,
             zoom;
         init();

         function init() {
             parseAllData();
             treeInit();
         }
         // listallcultivar();
         class loader {

             static start() {

                 $("#loader").show();
             }
             static stop() {
                 $("#loader").hide();
             }
         }

         $("#search").click(function() {
             var $name, $PInumber, $year, $country, $state, $maturityGrp;
             $name = $PInumber = $("#cultivar").val().trim().toLowerCase();
             $year = $("#year").val().trim();
             $country = $state = $("#origin").val().trim();
             $maturityGrp = $("#maturityGrp").val().trim();
             filteredData = [];
             filteredData = dataTable.filter(row => ($name ? (row['Male'].toLowerCase().includes($name) || row['Female'].toLowerCase().includes(
                         $name) || row['Cultivar'].toLowerCase().includes($name) || row['Cultivar_ID'].toLowerCase().includes($PInumber)) :
                     true) &&
                 ($country ? (row['Country'] == $country || row['State'] == $state) : true) &&
                 ($year ? (row['Year'] == $year) : true) &&
                 ($maturityGrp ? (row['MG'] == $maturityGrp) : true));
             generateTable(filteredData);

         });

         $(document).on('click', 'foreignObject', function(e) {
             var $tableBody = $("#cultivarInfo > table > tbody");
             console.log($(this).attr('value'));
             var object = dataTable.find(x => x.Cultivar == $(this).attr('value'));
             if (object) {
                 console.log(object);
             } else {
                 object = getemptyobject(dataTable.columns);
                 console.log(object);
             }
              $("#infoBox > h2").html("Cultivar : " + $(this).attr('value'));
             var objectKeys = Object.keys(object);

             var elementstoAppend = [];
             for (var i = 0; i < objectKeys.length; i++) {

                 var columnName = objectKeys[i];
                 var row = "<td>" + columnName + "</td><td>" + object[columnName] + "</td>";

                 elementstoAppend[i] = "<tr>" + row + "</tr>";

             }


             $tableBody.html(elementstoAppend.join(''));
         })

         $(document).on('change', "#attributes input[type='checkbox']", function(e) {
             var limit = 3;

             if ($("#attributes  input[type='checkbox']:checked").length >= limit) {
                 this.checked = false;
             }

             var selected = [];
             $("#attributes  input[type='checkbox']:checked").each(function() {
                 selected.push($(this).attr('value'));
             });

             console.log(selected);

             //d3.selectAll("foreignObject ").remove();
             d3.selectAll("foreignObject > div")
                 .html(function(d) {
                     var elementstoAppend = [];
                     elementstoAppend[0] = (d.data["Cultivar_ID"] ? d.data["Cultivar_ID"] : "N.A.") + " | " + d.data["Cultivar"];
                     for (var i = 1; i <= selected.length; i++) {

                         var row = "</br>" + selected[i - 1].substring(0,16) + " : " + (d.data[selected[i - 1]] ? d.data[selected[i - 1]] : "N.A.");
                        // var row = "</br>" + (d.data[selected[i - 1]] ? d.data[selected[i - 1]] : "N.A.");
                         elementstoAppend[i] = "<tr>" + row + "</tr>";
                     }
                     return elementstoAppend.join('');
                 });
         })


         $(document).on('click', "#tableBody .showTree", function(e) {


             $("#attributes input:checkbox").prop('checked', false);
             $("#infoBox > h2").html("Cultivar Info");
             $('#navTabs a[href="#pedigreeTab"]').tab('show');
             console.log($(this).attr('value'));
             var rootNode = $(this).attr('value');
             pedigreeNodes = []
             getParentNodesData(rootNode, "root");
             console.log(pedigreeNodes);
             var pedigree = structurePedigreeData(pedigreeNodes, rootNode);
             //generateTree(table);
             generateTree(pedigree);

         })

         $(document).on('click', "#resetTree", function(e) {

             d3.select("#treeSection > svg ").transition().duration(1000).call(zoom.transform, d3.zoomIdentity.translate(170, 0));

         })

         $(document).on('click', "#resetAll", function(e) {
             filteredData = [];
             $("#searchbar  :text").each(function() {
                 $(this).val("");
             });

             generateTable(dataTable);


         })

         $(document).on('click', "#exportData", function(e) {
             if (filteredData.length) {


                 var str = ConvertToCSV2(filteredData);
                 var uri = 'data:text/csv;charset=utf-8,' + str;

                 var downloadLink = document.createElement("a");
                 downloadLink.href = uri;
                 downloadLink.download = "data.csv";

                 document.body.appendChild(downloadLink);
                 downloadLink.click();
                 document.body.removeChild(downloadLink);
             } else {
                 alert('Use "Search" to filter out data first.');
             }
         })

         var uploadLink= document.createElement("input");
         $(document).on('click', "#uploadData", function(e) {
               
              uploadLink.type = 'file';
              uploadLink.accept = '';
              document.body.appendChild(uploadLink);
              uploadLink.click();
              console.log("comes here");
             // document.body.removeChild(uploadLink);
            
         })


         uploadLink.addEventListener('change', function(e) {
             // alert("change fired");
              var selectedfile=  uploadLink.files[0];
            handleFiles(uploadLink.files);

         });


          function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }

         function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8      
      
      // Handle errors load
      reader.onload = loadHandler;
      reader.readAsText(fileToRead);
     // reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }

    function processData(csv) {
        var allTextLines = csv.split(/\r\n|\n/);
        var lines = [];
        for (var i=1; i<allTextLines.length; i++) {
            var data = allTextLines[i].split(',');
                var tarr = [];
                for (var j=0; j<data.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
        }
      console.log(lines);
    }


         // JSON to CSV Converter
         function ConvertToCSV(objArray) {
             var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
             var str = '';

             for (var i = 0; i < array.length; i++) {
                 var line = '';
                 for (var index in array[i]) {
                     if (line != '') line += ','

                     line += array[i][index];
                 }

                 str += line + '\r\n';
             }

             return escape(str);
         }


         function ConvertToCSV2(json) {

             var fields = Object.keys(json[0])
             var replacer = function(key, value) {
                 return value === null ? '' : value
             }
             var csv = json.map(function(row) {
                 return fields.map(function(fieldName) {
                     return JSON.stringify(row[fieldName], replacer)
                 }).join(',')
             })
             csv.unshift(fields.join(',')) // add header column
             var str = csv.join('\r\n');

             return escape(str);
         }

         function getParentNodesData(cultivar, gender) {
             var node = clone(dataTable.find(a => a.Cultivar == cultivar));
             if (!node) {
                 node = {};
                 node = getemptyobject(dataTable.columns);
                 node.Cultivar = cultivar;
                 node["id"] = identifier;
                 node["gender"] = gender;
                 node["visited"] = false;
                 pedigreeNodes.push(node);
                 identifier++;
                 return;
             }
             node["id"] = identifier;
             node["visited"] = false;
             node["gender"] = gender;
             identifier++;
             pedigreeNodes.push(node);
             if (node.Male != "Unknown" || node.Female != "Unknown") {
                 if (node.Male) {
                     getParentNodesData(node.Male, "Male");
                 }
                 if (node.Female) {
                     getParentNodesData(node.Female, "Female");
                 }
             }
         }

         function structurePedigreeData(data, rootNode) {
             //setting root node has child property as null to make it root
             data.find(a => a.Cultivar == rootNode)['haschild'] = "";
             data.forEach(function(element, index, array) {
                 if (element.Male != "Unknown" || element.Female != "Unknown") {
                     if (element.Male) {
                         var node = array.find(a => a.Cultivar == element.Male && a.visited == false);
                         node['haschild'] = element["id"];
                         node['visited'] = true;
                     }
                     if (element.Female) {
                         var node = array.find(a => a.Cultivar == element.Female && a.visited == false);
                         node['haschild'] = element["id"];
                         node['visited'] = true;

                     }
                 }
             });

             return data;
         }

         function getemptyobject(properties) {
             console.log(properties);
             var object = {};
             properties.forEach(function(element, index, array) {
                 object[element] = "";

             });
             console.log(object.toString());
             return object;
         }



         function parseAllData() {
             d3.csv("data/data.csv", function(data) {

                 loader.stop();
                 dataTable = data;

                 // setTimeout(function (){loader.stop();} , 10000);

                 generateTable(data);
                 generateAttributeBoxData(dataTable);

             });
         }


         function generateTable(data) {
             var $tableHeader = $("#tableHeader");
             var $tableBody = $("#tableBody");
             var columns = dataTable.columns; // get column from main table data as the same fuction is used for filterd data also
             var dataCount = data.length;
             var columnsCount = columns.length;
             var elementstoAppend = [];
             var showTreeButtonIdentifier = "Cultivar";

             // clear previously displayed table data
             $tableHeader.empty();
             $tableBody.empty();

             // adding table headers
             elementstoAppend[0] = "<tr><th></th>";

             for (var i = 1; i <= columnsCount; i++) {
                 elementstoAppend[i] = "<th>" + columns[i - 1] + "</th>";
             }

             // adding extra column for show tree button
             var elementstoAppendLastIndex = elementstoAppend.length;
             elementstoAppend[elementstoAppendLastIndex] = "</tr>";
             $tableHeader.html(elementstoAppend.join(''));

             // adding data rows
             elementstoAppend = [];
             for (var i = 0; i < dataCount; i++) {
                 var dataRow = data[i];
                 var rowArray = [];
                 for (var j = 0; j < columnsCount; j++) {
                     var columnName = columns[j];
                     rowArray[j] = "<td>" + dataRow[columnName] + "</td>";
                 }

                 var showTreeButton = "<td><button type='button' class='btn btn-primary showTree' value =" + dataRow[showTreeButtonIdentifier] +
                     ">Show Tree</button></td>";
                 elementstoAppend[i] = "<tr>" + showTreeButton + rowArray.join('') + "</tr>";

             }


             $tableBody.html(elementstoAppend.join(''));
         }

         function generateAttributeBoxData(dataTable) {
             $list = $("#attributeBox > .container");
             var attributeList = dataTable.columns;
             var columnArray = [];
             for (var i = 0; i < attributeList.length; i++) {
                 var element = attributeList[i];
                 if (!(element.endsWith("ID") || element.endsWith("Cultivar"))) {
                     columnArray[i] = "<div class='checkbox'><label><input type='checkbox' value=" + element + ">" + element + "</label></div> ";
                 }
             }

             $list.html(columnArray.join(''));

         }


         function treeInit() {
             // Set the dimensions and margins of the diagram
             margin = {
                     top: 20,
                     right: 90,
                     bottom: 30,
                     left: 170
                 },
                 width = 1332 - margin.left - margin.right,
                 height = 750 - margin.top - margin.bottom;

             // declares a tree layout and assigns the size
             treemap = d3.tree().size([height, width]);
             zoom = d3.zoom();
             // append the svg object to the body of the page
             // appends a 'group' element to 'svg'
             // moves the 'group' element to the top left margin
             svg = d3.select("#treeSection").append("svg")
                 .attr("width", "100%")
                 .attr("height", "95%")
                 .call(zoom.scaleExtent([1 / 2, 4])
                         .wheelDelta(delta)
                     .on("zoom", zoomed));


             g = svg.append("g")
                 .attr("transform", "translate(" +
                     margin.left + "," + margin.top + ")");
         }


         function delta() {
             //console.log("gfdg");
             //console.log(d3.event.deltaMode +" "+ d3.event.deltaY);
            
           return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1) / 15000;
 
         }


         function zoomed() {
             g.attr("transform", d3.event.transform);
         }


         function generateTree(pedigreeData) {

             root = d3.stratify()
                 .id(function(d) {
                     return d.id;
                 })
                 .parentId(function(d) {
                     return d.haschild;
                 })
                 (pedigreeData);

             // Assigns parent, children, height, depth
             //root = d3.hierarchy(treeData, function(d) { return d.children; });
             root.x0 = height / 2;
             root.y0 = 0;

             // Collapse after the second level
             //root.children.forEach(collapse);

             update(root);
         }

         function clone(obj) {
             var copy;

             // Handle the 3 simple types, and null or undefined
             if (null == obj || "object" != typeof obj) return obj;

             // Handle Date
             if (obj instanceof Date) {
                 copy = new Date();
                 copy.setTime(obj.getTime());
                 return copy;
             }

             // Handle Array
             if (obj instanceof Array) {
                 copy = [];
                 for (var i = 0, len = obj.length; i < len; i++) {
                     copy[i] = clone(obj[i]);
                 }
                 return copy;
             }

             // Handle Object
             if (obj instanceof Object) {
                 copy = {};
                 for (var attr in obj) {
                     if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
                 }
                 return copy;
             }

             throw new Error("Unable to copy obj! Its type isn't supported.");
         }




         // Collapse the node and all it's children
         function collapse(d) {
             if (d.children) {
                 d._children = d.children
                 d._children.forEach(collapse)
                 d.children = null
             }
         }

         function update(source) {

             // Assigns the x and y position for the nodes
             var treeData = treemap(root);

             // Compute the new tree layout.
             var nodes = treeData.descendants(),
                 links = treeData.descendants().slice(1);

             // Normalize for fixed-depth.
             nodes.forEach(function(d) {
                 d.y = d.depth * 180
             });

             //  nodes.forEach(function(d) {
             //     d.x = d.depth * 100
             // }); 
             // ****************** Nodes section ***************************

             // Update the nodes...
             var node = g.selectAll('g.node')
                 .data(nodes, function(d) {
                     return d.id || (d.id = ++i);
                 });

             // Enter any new modes at the parent's previous position.
             var nodeEnter = node.enter().append('g')
                 .attr('class', 'node')
                 .attr("transform", function(d) {
                     return "translate(" + source.y0 + "," + source.x0 + ")";
                 })
             //.on('click', click);

             // Add Circle for the nodes
             nodeEnter.append('circle')
                 .attr('class', 'node')
                 .attr('r', 1e-6)
                 .style("fill", function(d) {
                     return d._children ? "lightsteelblue" : "#fff";
                 }).on('click', click);

             // Add labels for the nodes
             // nodeEnter.append('text')
             //     .attr("dy", ".35em")
             //     .attr("x", function(d) {
             //         return d.children || d._children ? -13 : 13;
             //     })
             //     .attr("text-anchor", function(d) {
             //         return d.children || d._children ? "end" : "start";
             //     })
             //     .text(function(d) { return d.data.name + d.data.paretnt; });

             var foreignobj = nodeEnter.append("foreignObject")
                 .attr("width", 150)
                 .attr("height", 55)
                 .attr("y", 0)
                 .attr("x", function(d) {
                     return d.children || d._children ? -162 : 12;
                 })
                 .attr("text-anchor", function(d) {
                     return d.children || d._children ? "end" : "start";
                 })
                 .attr("value", function(d) {
                     return d.data["Cultivar"];
                 })
                 .append("xhtml:div")
                 .attr("class", "popupBox")

                 .html(function(d) {
                     return (d.data["Cultivar_ID"] ? d.data["Cultivar_ID"] : "N.A.") + " | " + d.data.Cultivar;
                 });

             // UPDATE
             var nodeUpdate = nodeEnter.merge(node);

             // Transition to the proper position for the node
             nodeUpdate.transition()
                 .duration(duration)
                 .attr("transform", function(d) {
                     return "translate(" + d.y + "," + d.x + ")";
                 });

             // Update the node attributes and style
             nodeUpdate.select('circle.node')
                 .attr('r', 10)
                 .style("fill", function(d) {
                     return d._children ? "lightsteelblue" : "#fff";
                 })
                 .attr('cursor', 'pointer');


             // Remove any exiting nodes
             var nodeExit = node.exit().transition()
                 .duration(duration)
                 .attr("transform", function(d) {
                     return "translate(" + source.y + "," + source.x + ")";
                 })
                 .remove();

             // On exit reduce the node circles size to 0
             nodeExit.select('circle')
                 .attr('r', 1e-6);

             // On exit reduce the opacity of text labels
             nodeExit.select('text')
                 .style('fill-opacity', 1e-6);

             // ****************** links section ***************************

             // Update the links...
             var link = g.selectAll('path.link')
                 // .style("stroke", function(d) { return (d.data.gender == "Female" ? "pink":"blue"); })
                 .data(links, function(d) {
                     return d.id;
                 });

             // Enter any new links at the parent's previous position.
             var linkEnter = link.enter().insert('path', "g")
                 .attr("class", "link")
                 .style("stroke", function(d) {
                     return (d.data.gender == "Female" ? "#ec60db" : "blue");
                 })
                 .attr('d', function(d) {
                     var o = {
                         x: source.x0,
                         y: source.y0
                     }
                     return diagonal(o, o)
                 });

             // UPDATE
             var linkUpdate = linkEnter.merge(link);

             // Transition back to the parent element position
             linkUpdate.transition()
                 .duration(duration)
                 .attr('d', function(d) {
                     return diagonal(d, d.parent)
                 });

             // Remove any exiting links
             var linkExit = link.exit().transition()
                 .duration(duration)
                 .attr('d', function(d) {
                     var o = {
                         x: source.x,
                         y: source.y
                     }
                     return diagonal(o, o)
                 })
                 .remove();

             // Store the old positions for transition.
             nodes.forEach(function(d) {
                 d.x0 = d.x;
                 d.y0 = d.y;
             });

             // Creates a curved (diagonal) path from parent to the child nodes
             function diagonal(s, d) {

                 path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

                 return path
             }

             // Toggle children on click.
             function click(d) {
                 console.log("click event fired");
                 if (d.children) {
                     d._children = d.children;
                     d.children = null;
                 } else {
                     d.children = d._children;
                     d._children = null;
                 }
                 update(d);
             }
         }




     });