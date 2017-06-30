   $(function() {
       console.log("ready!");
       var dataTable = [];
       var pedigreeNodes = [];
       var table=[];
       var i = 0,
           duration = 750,
           root, margin, treemap, svg, g;
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

           var filteredData = dataTable.filter(row => ($name ? (row['Male'].toLowerCase().includes($name) || row['Female'].toLowerCase().includes($name) || row['Cultivar'].toLowerCase().includes($name) || row['PI number'].toLowerCase().includes($PInumber)) : true) &&
               ($country ? (row['Country'] == $country || row['State'] == $state) : true) &&
               ($year ? (row['Year'] == $year) : true) &&
               ($maturityGrp ? (row['MG'] == $maturityGrp) : true));
           generateTable(filteredData);

       });

       $(document).on('click','foreignObject',function(e){
         console.log($(this).attr('value'));
         var object= dataTable.find(x=>x.Cultivar == $(this).attr('value'));
         if(object){
          console.log(object); 
         }else{
          object=getemptyobject(dataTable.columns);
           console.log(object);
         }
         $("#cultivarInfo").html(JSON.stringify(object));

       })

       $(document).on('change', "#attributes input[type='checkbox']", function(e) {
           var limit = 2;

           if ($("#attributes  input[type='checkbox']:checked").length >= limit) {
               this.checked = false;
           }

           var selected = [];
           $("#attributes  input[type='checkbox']:checked").each(function() {
               selected.push($(this).attr('value'));
           });

           console.log("change fired");

           //d3.selectAll("foreignObject ").remove();
           d3.selectAll("foreignObject > div")
               .html(function(d) { 
                  if(selected.length <= 0){
                   return d.data["PI number"] + " | " + d.data["Cultivar"] ;
                  }    
                   return (d.data["PI number"] ? d.data["PI number"] : "N.A.") + " | " + d.data["Cultivar"] + "</br>" + selected[0] +" : "+(d.data[selected[0]] ? d.data[selected[0]] : "N.A.");
               });
       })


       $(document).on('click', "#tableBody .showTree", function(e) {

           $('#navTabs a[href="#pedigreeTab"]').tab('show');
           console.log($(this).attr('value'));
           var rootNode = $(this).attr('value');
           pedigreeNodes = []
           getParentNodesData(rootNode);
           console.log(pedigreeNodes);
           var pedigree = structurePedigreeData(pedigreeNodes, rootNode);
           //generateTree(table);
           generateTree(pedigree);

       })


       function getParentNodesData(cultivar) {
           var boole = pedigreeNodes.find(a => a.Cultivar == cultivar)
           if (boole) {
               return;
           }
           var node = dataTable.find(a => a.Cultivar == cultivar);
           if (!node) {
               node = {};
               node = getemptyobject(dataTable.columns);
               node.Cultivar = cultivar;
               pedigreeNodes.push(node);
               return;
           }
           pedigreeNodes.push(node);
           if (node.Male) {
               getParentNodesData(node.Male);
           }
           if (node.Female) {
               getParentNodesData(node.Female);
           }
       }

       function structurePedigreeData(data, rootNode) {
           //setting root node has child property as null to make it root
           data.find(a => a.Cultivar == rootNode)['haschild'] = "";
           data.forEach(function(element, index, array) {
               if (element.Male) {
                   var node = array.find(a => a.Cultivar == element.Male)['haschild'] = element.Cultivar;
               }
               if (element.Female) {
                   array.find(a => a.Cultivar == element.Female)['haschild'] = element.Cultivar;
               }
           });

           return data;
       }
       
       function getemptyobject(properties){
           console.log(properties);
           var object={};
           properties.forEach(function(element, index, array){
           object[element] = "";

          });
          console.log(object.toString());
          return object;
        }



       function parseAllData() {
           d3.csv("data.csv", function(data) {

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
           elementstoAppend[0] = "<tr>";

           for (var i = 1; i <= columnsCount; i++) {
               elementstoAppend[i] = "<th>" + columns[i - 1] + "</th>";
           }

           // adding extra column for show tree button
           var elementstoAppendLastIndex = elementstoAppend.length;
           elementstoAppend[elementstoAppendLastIndex] = "<th></th></tr>";
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

               var showTreeButton = "<td><button type='button' class='btn btn-primary showTree' value =" + dataRow[showTreeButtonIdentifier] + ">Show Tree</button></td>";
               elementstoAppend[i] = "<tr>" + rowArray.join('') + showTreeButton + "</tr>";

           }


           $tableBody.html(elementstoAppend.join(''));
       }

       function generateAttributeBoxData(dataTable) {
           $list = $("#attributeBox > .container");
           var attributeList = dataTable.columns;
           var columnArray = [];
           for (var i = 0; i < attributeList.length; i++) {
               var element = attributeList[i];
               if (!(element.includes("PI") || element.includes("Cultivar"))) {
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

           // append the svg object to the body of the page
           // appends a 'group' element to 'svg'
           // moves the 'group' element to the top left margin
           svg = d3.select("#treeSection").append("svg")
               .attr("width", width + margin.right + margin.left)
               .attr("height", height + margin.top + margin.bottom)
               .call(d3.zoom()
                   .scaleExtent([1 / 2, 4])
                   .on("zoom", zoomed));;

           g = svg.append("g")
               .attr("transform", "translate(" +
                   margin.left + "," + margin.top + ")");
       }



        table = [{
               "Cultivar": "Hawkeye",
               "haschild": "",
               "State": "Iowa",
               "MG": "IIIIIIIIIIIIIIIIIII"
           },
           {
               "Cultivar": "Richland",
               "haschild": "Hawkeye",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "Mukden",
               "haschild": "Hawkeye",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "Adams",
               "haschild": "Richland",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "john",
               "haschild": "Richland",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "jam",
               "haschild": "john",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "jam1",
               "haschild": "jam",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "wiz",
               "haschild": "jam1",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "khalifa",
               "haschild": "jam1",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "jam2",
               "haschild": "jam",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "jeremy",
               "haschild": "jam2",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "nutt",
               "haschild": "jam2",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "sam",
               "haschild": "john",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "sam1",
               "haschild": "sam",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "kapil",
               "haschild": "sam1",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "joshi",
               "haschild": "sam1",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "sam2",
               "haschild": "sam",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "samosa",
               "haschild": "sam2",
               "State": "Iowa",
               "MG": "IIIIIIIIIIIIIIIIIII"
           },
           {
               "Cultivar": "chatni",
               "haschild": "sam2",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "Harly",
               "haschild": "Mukden",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "Harly1",
               "haschild": "Harly",
               "State": "Iowa",
               "MG": "II"
           },
           {
               "Cultivar": "Harly2",
               "haschild": "Harly",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "Monroe",
               "haschild": "Mukden",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "Monroe1",
               "haschild": "Monroe",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "Monroe2",
               "haschild": "Monroe",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "Dunfield",
               "haschild": "Adams",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "Illini",
               "haschild": "Adams",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "bill1",
               "haschild": "Illini",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "johnthan",
               "haschild": "bill1",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "martin",
               "haschild": "bill1",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "bill2",
               "haschild": "Illini",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "kay",
               "haschild": "bill2",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "eliyana",
               "haschild": "bill2",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "Lee",
               "haschild": "Dunfield",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "jackey",
               "haschild": "Lee",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "chan",
               "haschild": "Lee",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "bruse",
               "haschild": "Dunfield",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "bruse1",
               "haschild": "bruse",
               "State": "georgia",
               "MG": "III"
           },
           {
               "Cultivar": "bruse2",
               "haschild": "bruse",
               "State": "georgia",
               "MG": "III"
           }
       ]

       function zoomed() {
           g.attr("transform", d3.event.transform);
       }


       function generateTree(pedigreeData) {

           root = d3.stratify()
               .id(function(d) {
                   return d.Cultivar;
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
               .attr("height", 40)
               .attr("y", 0)
               .attr("x", function(d) {
                   return d.children || d._children ? -162 : 12;
               })
               .attr("text-anchor", function(d) {
                   return d.children || d._children ? "end" : "start";
               })
               .attr("value", function(d) {
                   return d.data["Cultivar"] ;
               })
               .append("xhtml:div")
               .attr("class", "popupBox")

               .html(function(d) {
                   return (d.data["PI number"] ? d.data["PI number"] : "N.A.") + " | " + d.data.Cultivar ;
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
               .data(links, function(d) {
                   return d.id;
               });

           // Enter any new links at the parent's previous position.
           var linkEnter = link.enter().insert('path', "g")
               .attr("class", "link")
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