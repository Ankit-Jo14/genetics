 $(function() {
     console.log("ready!");
     var tableData = [];

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
          var $name , $PInumber , $year, $country, $state , $maturityGrp ;
          $name = $PInumber= $("#cultivar").val().trim().toLowerCase();
          $year = $("#year").val().trim();
          $country = $state = $("#origin").val().trim();
          $maturityGrp = $("#maturityGrp").val().trim();
         
         
          
         // var searchPart1 = $name ? (row['Cultivar'] == $name || row['PI number'] == $PInumber) : true ;
         // var searchPart2 = $country ? (row['Country'] == $country || row['State'] == $state) : true ;
         // var searchPart3 =  $year ? (row['Year'] == $year) : true;
         // var searchPart4 = $maturityGrp ? (row['MG'] == $maturityGrp) : true;
         // var filteredData = tableData.filter(row => ($name ? (row['Cultivar'] == $name || row['PI number'] == $PInumber) : true) && 
         //                                            ($country ? (row['Country'] == $country || row['State'] == $state) : true) && 
         //                                            ($year ? (row['Year'] == $year) : true) && 
         //                                            ($maturityGrp ? (row['MG'] == $maturityGrp) : true));    
         
         var filteredData = tableData.filter(row => ($name ? (row['Cultivar'].toLowerCase().includes($name) || row['PI number'].toLowerCase().includes($PInumber)) : true) && 
                                                    ($country ? (row['Country'] == $country || row['State'] == $state) : true) && 
                                                    ($year ? (row['Year'] == $year) : true) && 
                                                    ($maturityGrp ? (row['MG'] == $maturityGrp) : true));  
         generateTable(filteredData);

     });

     parseAllData();



     function parseAllData() {
         d3.csv("data.csv", function(data) {

             loader.stop();
        tableData = data; 
             // setTimeout(function (){loader.stop();} , 10000);

             generateTable(data);


         });
     }


     function generateTable(data) {
         var $tableHeader = $("#tableHeader");
         var $tableBody = $("#tableBody");
         var columns = tableData.columns;// get column from main table data as the same fuction is used for filterd data also
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

             var showTreeButton = "<td><button type='button' class='btn btn-primary' value =" + dataRow[showTreeButtonIdentifier] + ">Show Tree</button></td>";
             elementstoAppend[i] = "<tr>" + rowArray.join('') + showTreeButton + "</tr>";

         }


         $tableBody.html(elementstoAppend.join(''));
     }
 });