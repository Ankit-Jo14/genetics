     $(function() {
         console.log("ready!");
         var dataTable = [{"Cultivar_ID":"Z000001","Cultivar_Name":"Woodruff","Cultivar_Alias":"","Female_ID":"PI615694","Female_Name":"N7001","Male_ID":"PI602597","Male_Name":"Boggs","Subcollection":"Modern","State":"Georgia","Country":"United States","Year":"2012","Pedigree-Original":"N7001 x Boggs","MG":"7","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"Tn","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI615694","Cultivar_Name":"N7001","Cultivar_Alias":"","Female_ID":"Z000002","Female_Name":"N77-114","Male_ID":"PI416937","Male_Name":"PI 416937","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"2001","Pedigree-Original":"N77-114 x PI 416937","MG":"7","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Br","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Ib","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI602597","Cultivar_Name":"Boggs","Cultivar_Alias":"","Female_ID":"Z000003","Female_Name":"G81-152","Male_ID":"Z000004","Male_Name":"Coker 6738","Subcollection":"Modern","State":"Georgia","Country":"United States","Year":"1998","Pedigree-Original":"G81-152 x Coker 6738","MG":"6","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000002","Cultivar_Name":"N77-114","Cultivar_Alias":"","Female_ID":"PI548667","Female_Name":"Essex","Male_ID":"Z000006","Male_Name":"N70-2173","Subcollection":"","State":"North Carolina","Country":"United States","Year":"","Pedigree-Original":"Essex x N70-2173","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI416937","Cultivar_Name":"PI 416937","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"","State":"","Country":"Japan","Year":"1977","Pedigree-Original":"","MG":"6","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Br","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"","Other:Seed":"Vhil","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000003","Cultivar_Name":"G81-152","Cultivar_Alias":"","Female_ID":"Z000005","Female_Name":"D74-7741","Male_ID":"PI556536","Male_Name":"Coker 237","Subcollection":"Modern","State":"Georgia","Country":"United States","Year":"","Pedigree-Original":"D74-7741 x Coker 237","MG":"6","Stem_Termination":"D","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000004","Cultivar_Name":"Coker 6738","Cultivar_Alias":"","Female_ID":"PI548659","Female_Name":"Braxton","Male_ID":"PI556696","Male_Name":"Coker 368","Subcollection":"Modern","State":"South Carolina","Country":"United States","Year":"","Pedigree-Original":"Braxton x Coker 368","MG":"8","Stem_Termination":"D","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI556696","Cultivar_Name":"Coker 368","Cultivar_Alias":"","Female_ID":"Z000007","Female_Name":"Coker 71-211","Male_ID":"PI548975","Male_Name":"Centennial","Subcollection":"Modern","State":"South Carolina","Country":"United States","Year":"1983","Pedigree-Original":"Coker 71-211 x Centennial","MG":"8","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"G","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bf","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548659","Cultivar_Name":"Braxton","Cultivar_Alias":"","Female_ID":"Z000008","Female_Name":"F59-1505","Male_ID":"UN000000","Male_Name":"Unknown","Subcollection":"Modern","State":"Florida","Country":"United States","Year":"1979","Pedigree-Original":"F59-1505 x (Bragg(3) x D60-7965)","MG":"7","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI556536","Cultivar_Name":"Coker 237","Cultivar_Alias":"","Female_ID":"PI548662","Female_Name":"Hutton","Male_ID":"Z000008","Male_Name":"N63-858","Subcollection":"Modern","State":"South Carolina","Country":"United States","Year":"1978","Pedigree-Original":"Hutton x N63-858","MG":"7","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000005","Cultivar_Name":"D74-7741","Cultivar_Alias":"","Female_ID":"PI548655","Female_Name":"Forrest","Male_ID":"Z000009","Male_Name":"D70-3001","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"","Pedigree-Original":"Forrest x D70-3001","MG":"6","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548667","Cultivar_Name":"Essex","Cultivar_Alias":"","Female_ID":"PI548656","Female_Name":"Lee","Male_ID":"Z000010","Male_Name":"S5-7075","Subcollection":"Modern","State":"Virginia","Country":"United States","Year":"1972","Pedigree-Original":"Lee x S5-7075","MG":"5","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Ib","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000006","Cultivar_Name":"N70-2173","Cultivar_Alias":"","Female_ID":"PI614156","Female_Name":"Hampton","Male_ID":"PI548989","Male_Name":"Ransom","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"","Pedigree-Original":"Hampton x Ransom","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000007","Cultivar_Name":"Coker 71-211","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"","Pedigree-Original":"Hampton 266 x Bragg","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548975","Cultivar_Name":"Centennial","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"1991","Pedigree-Original":"D64-4636 x Pickett 71","MG":"6","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"Sa","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548662","Cultivar_Name":"Hutton","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Florida","Country":"United States","Year":"1974","Pedigree-Original":"F55-822 x (Roanoke x CNS-4)","MG":"8","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000008","Cultivar_Name":"N63-858","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"","Pedigree-Original":"D58-3358 x D59-9289","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548655","Cultivar_Name":"Forrest","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"1972","Pedigree-Original":"Dyer x Bragg","MG":"5","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"Sa","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Lgn","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000008","Cultivar_Name":"F59-1505","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Florida","Country":"United States","Year":"","Pedigree-Original":"Jackson x D49-2491","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000009","Cultivar_Name":"D70-3001","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"","Pedigree-Original":"D64-4636 x Pickett 71","MG":"6","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548656","Cultivar_Name":"Lee","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"1954","Pedigree-Original":"S-100 x CNS","MG":"6","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000010","Cultivar_Name":"S5-7075","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Missouri","Country":"United States","Year":"","Pedigree-Original":"N48-1248 x Perry","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI614156","Cultivar_Name":"Hampton","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Private","State":"South Carolina","Country":"United States","Year":"1962","Pedigree-Original":"F4 selection from Majos x Lee","MG":"8","Stem_Termination":"S","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"A","Pubescence_Density":"N","Pod_Color":"Br","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Bf","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548989","Cultivar_Name":"Ransom","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"1970","Pedigree-Original":"N55-5931 x N55-3818","MG":"7","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""}];
         var pedigreeNodes = [];
         var table = [];
         var filteredData = [];
         var selected = [];
         var i = 0,
             duration = 750,
             root, margin, treemap, svg, g, identifier = 0,
             zoom;
         init();

         class loader {

             static start() {

                 $("#loader").show();
             }
             static stop() {
                 $("#loader").hide();
             }
         }

         function init() {
             parseAllData();
             treeInit();
         }
         // listallcultivar();
         

         $("#search").click(function() {
             var $name, $PInumber, $year, $country, $state, $maturityGrp;
             $name = $PInumber = $("#cultivar").val().trim().toLowerCase();
             $year = $("#year").val().trim();
             $country = $state = $("#origin").val().trim();
             $maturityGrp = $("#maturityGrp").val().trim();
             filteredData = [];
             filteredData = dataTable.filter(row => ($name ? (row['Male_Name'].toLowerCase().includes($name) || row['Male_ID'].toLowerCase().includes($PInumber) || row['Female_ID'].toLowerCase().includes($PInumber) || row['Female_Name'].toLowerCase().includes(
                         $name) || row['Cultivar_Name'].toLowerCase().includes($name) || row['Cultivar_ID'].toLowerCase().includes($PInumber)) :
                     true) &&
                 ($country ? (row['Country'] == $country || row['State'] == $state) : true) &&
                 ($year ? (row['Year'] == $year) : true) &&
                 ($maturityGrp ? (row['MG'] == $maturityGrp) : true));
             generateTable(filteredData);

         });

         $(document).on('click', 'foreignObject', function(e) {
             var $tableBody = $("#cultivarInfo > table > tbody");
             console.log($(this).attr('value'));
             var object = dataTable.find(x => x.Cultivar_ID == $(this).attr('value'));
             if (object) {
                 console.log(object);
             } else {
                 object = getemptyobject(dataTable.columns);
                 console.log(object);
             }
              $("#infoBox > h2").html("Cultivar : " + object.Cultivar_Name);
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
             var limit = 2;

             if($(this).prop("checked")){
                selected.push($(this).attr('value'));
                if (selected.length >= limit) {
                    var removed = selected.shift();
                    $("#attributes  input[type='checkbox'][value="+removed+"]").prop('checked',false);

                }
                
             }else{
                var index = selected.indexOf($(this).attr('value'));
                var removed = selected.splice(index,1);
                 $("#attributes  input[type='checkbox'][value="+removed[0]+"]").prop('checked',false);
             }
            
              
            // $("#attributes  input[type='checkbox']:checked").each(function() {
            //     selected.push($(this).attr('value'));
            // });

            // if ($("#attributes  input[type='checkbox']:checked").length >= limit) {
                
            //    $("#attributes  input[type='checkbox'][value="+selected[1]+"]").prop('checked',false); 
            //    selected.splice(0,1);
            //  }

             console.log(selected);

             //d3.selectAll("foreignObject ").remove();
             d3.selectAll("foreignObject > div")
                 .html(function(d) {
                     var elementstoAppend = [];
                     elementstoAppend[0] = (d.data["Cultivar_ID"] ? d.data["Cultivar_ID"].substring(0,15) : "N.A.") + " | " + d.data["Cultivar_Name"];
                     for (var i = 1; i <= selected.length; i++) {

                         var row = "</br>" + selected[i - 1].substring(0,15) + " : " + (d.data[selected[i - 1]] ? d.data[selected[i - 1]] : "N.A.");
                        // var row = "</br>" + (d.data[selected[i - 1]] ? d.data[selected[i - 1]] : "N.A.");
                         elementstoAppend[i] = "<tr>" + row + "</tr>";
                     }
                     return elementstoAppend.join('');
                 });
         })

         $("#cultivar,#maturityGrp,#year,#origin").keyup(function(event){
    if(event.keyCode == 13){
        $("#search").click();
    }
});


         $(document).on('click', "#tableBody .showTree", function(e) {


             $("#attributes input:checkbox").prop('checked', false);
             $("#infoBox > h2").html("Cultivar Info");
             $('#navTabs a[href="#pedigreeTab"]').tab('show');
             console.log("rrot name"+$(this).attr('value'));
             var rootNode = $(this).attr('value');
             pedigreeNodes = []
             selected=[];
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

         $(document).on('click', "#downloadTemplate", function(e) {
        


                 var str = ConvertToCSV2(dataTable);
                 var uri = 'data:text/csv;charset=utf-8,' + str;

                 var downloadLink = document.createElement("a");
                 downloadLink.href = uri;
                 downloadLink.download = "template.csv";

                 document.body.appendChild(downloadLink);
                 downloadLink.click();
                 document.body.removeChild(downloadLink);
             
         })

         var uploadLink= document.createElement("input");
         uploadLink.style.display = "none";
         $(document).on('click', "#uploadData", function(e) {
               
              uploadLink.type = 'file';
              uploadLink.accept = '.csv';
              document.body.appendChild(uploadLink);
              uploadLink.click();
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
        lines.columns = allTextLines[0].split(','); 
        for (var i=1; i<allTextLines.length-1; i++) {
            var data = allTextLines[i].split(',');
                var tarr = {};
                for (var j=0; j<data.length; j++) {
                      var obj={};
                      tarr[lines.columns[j]] = data[j];  
                   // tarr.push(obj);
                }

                 if(i==0){
                    // lines.columns = tarr;  
                    }else{
                        lines.push(tarr);
                    }
                
        }
      console.log(JSON.stringify(lines));
      parseAllData(lines);

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

         function getParentNodesData(cultivar_id,cultivar_name, gender) {
             var node = undefined;
             if(cultivar_id != "UN000000"){
             node = clone(dataTable.find(a => a.Cultivar_ID == cultivar_id));   
             }
             
             if (!node) {
                 node = {};
                 node = getemptyobject(dataTable.columns);
                 node["Cultivar_Name"] = cultivar_name;
                 node["Cultivar_ID"] = cultivar_id;
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
             if (node.Male_Name != "Unknown" || node.Female_Name != "Unknown") {
                 if (node.Male_ID) {
                     getParentNodesData(node.Male_ID,node.Male_Name, "Male");
                 }
                 if (node.Female_ID) {
                     getParentNodesData(node.Female_ID,node.Female_Name, "Female");
                 }
             }
         }

         function structurePedigreeData(data, rootNode) {
             //setting root node has child property as null to make it root
             data.find(a => a.Cultivar_ID == rootNode)['haschild'] = "";
             data.forEach(function(element, index, array) {
                 if (element.Male_Name != "Unknown" || element.Female_Name != "Unknown") {
                     if (element.Male_ID) {
                         var node = array.find(a => a.Cultivar_ID == element.Male_ID && a.visited == false);
                         node['haschild'] = element["id"];
                         node['visited'] = true;
                     }
                     if (element.Female_ID) {
                         var node = array.find(a => a.Cultivar_ID == element.Female_ID && a.visited == false);
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



         function parseAllData(data) {
            if(!data){ 
               // d3.csv("data/data.csv", function(data) {
                 $("#loader").hide();
                 //loader.stop();
                // dataTable = [{"Cultivar_ID":"Z000001","Cultivar_Name":"Woodruff","Cultivar_Alias":"","Female_ID":"PI615694","Female_Name":"N7001","Male_ID":"PI602597","Male_Name":"Boggs","Subcollection":"Modern","State":"Georgia","Country":"United States","Year":"2012","Pedigree-Original":"N7001 x Boggs","MG":"7","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"Tn","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI615694","Cultivar_Name":"N7001","Cultivar_Alias":"","Female_ID":"Z000002","Female_Name":"N77-114","Male_ID":"PI416937","Male_Name":"PI 416937","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"2001","Pedigree-Original":"N77-114 x PI 416937","MG":"7","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Br","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Ib","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI602597","Cultivar_Name":"Boggs","Cultivar_Alias":"","Female_ID":"Z000003","Female_Name":"G81-152","Male_ID":"Z000004","Male_Name":"Coker 6738","Subcollection":"Modern","State":"Georgia","Country":"United States","Year":"1998","Pedigree-Original":"G81-152 x Coker 6738","MG":"6","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000002","Cultivar_Name":"N77-114","Cultivar_Alias":"","Female_ID":"PI548667","Female_Name":"Essex","Male_ID":"Z000006","Male_Name":"N70-2173","Subcollection":"","State":"North Carolina","Country":"United States","Year":"","Pedigree-Original":"Essex x N70-2173","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI416937","Cultivar_Name":"PI 416937","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"","State":"","Country":"Japan","Year":"1977","Pedigree-Original":"","MG":"6","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Br","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"","Other:Seed":"Vhil","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000003","Cultivar_Name":"G81-152","Cultivar_Alias":"","Female_ID":"Z000005","Female_Name":"D74-7741","Male_ID":"PI556536","Male_Name":"Coker 237","Subcollection":"Modern","State":"Georgia","Country":"United States","Year":"","Pedigree-Original":"D74-7741 x Coker 237","MG":"6","Stem_Termination":"D","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000004","Cultivar_Name":"Coker 6738","Cultivar_Alias":"","Female_ID":"PI548659","Female_Name":"Braxton","Male_ID":"PI556696","Male_Name":"Coker 368","Subcollection":"Modern","State":"South Carolina","Country":"United States","Year":"","Pedigree-Original":"Braxton x Coker 368","MG":"8","Stem_Termination":"D","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI556696","Cultivar_Name":"Coker 368","Cultivar_Alias":"","Female_ID":"Z000007","Female_Name":"Coker 71-211","Male_ID":"PI548975","Male_Name":"Centennial","Subcollection":"Modern","State":"South Carolina","Country":"United States","Year":"1983","Pedigree-Original":"Coker 71-211 x Centennial","MG":"8","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"G","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bf","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548659","Cultivar_Name":"Braxton","Cultivar_Alias":"","Female_ID":"Z000008","Female_Name":"F59-1505","Male_ID":"UN000000","Male_Name":"Unknown","Subcollection":"Modern","State":"Florida","Country":"United States","Year":"1979","Pedigree-Original":"F59-1505 x (Bragg(3) x D60-7965)","MG":"7","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI556536","Cultivar_Name":"Coker 237","Cultivar_Alias":"","Female_ID":"PI548662","Female_Name":"Hutton","Male_ID":"Z000008","Male_Name":"N63-858","Subcollection":"Modern","State":"South Carolina","Country":"United States","Year":"1978","Pedigree-Original":"Hutton x N63-858","MG":"7","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000005","Cultivar_Name":"D74-7741","Cultivar_Alias":"","Female_ID":"PI548655","Female_Name":"Forrest","Male_ID":"Z000009","Male_Name":"D70-3001","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"","Pedigree-Original":"Forrest x D70-3001","MG":"6","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548667","Cultivar_Name":"Essex","Cultivar_Alias":"","Female_ID":"PI548656","Female_Name":"Lee","Male_ID":"Z000010","Male_Name":"S5-7075","Subcollection":"Modern","State":"Virginia","Country":"United States","Year":"1972","Pedigree-Original":"Lee x S5-7075","MG":"5","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Ib","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000006","Cultivar_Name":"N70-2173","Cultivar_Alias":"","Female_ID":"PI614156","Female_Name":"Hampton","Male_ID":"PI548989","Male_Name":"Ransom","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"","Pedigree-Original":"Hampton x Ransom","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000007","Cultivar_Name":"Coker 71-211","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"","Pedigree-Original":"Hampton 266 x Bragg","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548975","Cultivar_Name":"Centennial","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"1991","Pedigree-Original":"D64-4636 x Pickett 71","MG":"6","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"Sa","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548662","Cultivar_Name":"Hutton","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Florida","Country":"United States","Year":"1974","Pedigree-Original":"F55-822 x (Roanoke x CNS-4)","MG":"8","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000008","Cultivar_Name":"N63-858","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"","Pedigree-Original":"D58-3358 x D59-9289","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548655","Cultivar_Name":"Forrest","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"1972","Pedigree-Original":"Dyer x Bragg","MG":"5","Stem_Termination":"D","Flower_Color":"W","Pubescence_Color":"T","Pubescence_Form":"Sa","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"I","Seedcoat_Color":"Lgn","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000008","Cultivar_Name":"F59-1505","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Florida","Country":"United States","Year":"","Pedigree-Original":"Jackson x D49-2491","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000009","Cultivar_Name":"D70-3001","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"","Pedigree-Original":"D64-4636 x Pickett 71","MG":"6","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548656","Cultivar_Name":"Lee","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Mississippi","Country":"United States","Year":"1954","Pedigree-Original":"S-100 x CNS","MG":"6","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"Z000010","Cultivar_Name":"S5-7075","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"Missouri","Country":"United States","Year":"","Pedigree-Original":"N48-1248 x Perry","MG":"","Stem_Termination":"","Flower_Color":"","Pubescence_Color":"","Pubescence_Form":"","Pubescence_Density":"","Pod_Color":"","Seedcoat_Luster":"","Seedcoat_Color":"","Hilum_Color":"","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI614156","Cultivar_Name":"Hampton","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Private","State":"South Carolina","Country":"United States","Year":"1962","Pedigree-Original":"F4 selection from Majos x Lee","MG":"8","Stem_Termination":"S","Flower_Color":"P","Pubescence_Color":"G","Pubescence_Form":"A","Pubescence_Density":"N","Pod_Color":"Br","Seedcoat_Luster":"D","Seedcoat_Color":"Y","Hilum_Color":"Bf","Other:Seed":"","Other:Leaf":"","Other:Plant":""},{"Cultivar_ID":"PI548989","Cultivar_Name":"Ransom","Cultivar_Alias":"","Female_ID":"","Female_Name":"","Male_ID":"","Male_Name":"","Subcollection":"Modern","State":"North Carolina","Country":"United States","Year":"1970","Pedigree-Original":"N55-5931 x N55-3818","MG":"7","Stem_Termination":"D","Flower_Color":"P","Pubescence_Color":"T","Pubescence_Form":"E","Pubescence_Density":"N","Pod_Color":"Tn","Seedcoat_Luster":"S","Seedcoat_Color":"Y","Hilum_Color":"Bl","Other:Seed":"","Other:Leaf":"","Other:Plant":""}];
                 dataTable["columns"]= Object.keys(dataTable[0]);
                 // setTimeout(function (){loader.stop();} , 10000);

                 generateTable(dataTable);
                 generateAttributeBoxData(dataTable);

            //});
         }else{
                 dataTable = data;
                 generateTable(data);
                 generateAttributeBoxData(data);
         }
     }


         function generateTable(data) {
             var $tableHeader = $("#tableHeader");
             var $tableBody = $("#tableBody");
             var columns = dataTable.columns; // get column from main table data as the same fuction is used for filterd data also
             var dataCount = data.length;
             var columnsCount = columns.length;
             var elementstoAppend = [];
             var showTreeButtonIdentifier = "Cultivar_ID";

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
                     ">Show Pedigree</button></td>";
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
                 width = 2000 - margin.left - margin.right,
                 height = 1200 - margin.top - margin.bottom;

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
           return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1) / 4000;
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
                 d.y = d.depth * 250
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
                 .attr("width", 200)
                 .attr("height", 55)
                 .attr("y", 0)
                 .attr("x", function(d) {
                     return d.children || d._children ? -210 : 12;
                 })
                 .attr("text-anchor", function(d) {
                     return d.children || d._children ? "end" : "start";
                 })
                 .attr("value", function(d) {
                     return d.data["Cultivar_ID"];
                 })
                 .append("xhtml:div")
                 .attr("class", "popupBox")

                 .html(function(d) {
                      var elementstoAppend = [];
                     elementstoAppend[0] = (d.data["Cultivar_ID"] ? d.data["Cultivar_ID"] : "N.A.") + " | " + d.data["Cultivar_Name"].substring(0,15);
                     for (var i = 1; i <= selected.length; i++) {

                         var row = "</br>" + selected[i - 1].substring(0,15) + " : " + (d.data[selected[i - 1]] ? d.data[selected[i - 1]] : "N.A.");
                        // var row = "</br>" + (d.data[selected[i - 1]] ? d.data[selected[i - 1]] : "N.A.");
                         elementstoAppend[i] = "<tr>" + row + "</tr>";
                     }
                     return elementstoAppend.join('');
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