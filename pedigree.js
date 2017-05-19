
var treeData =[];
var datacsv = [];
var Atreedatacorrected=[];
d3.csv("sampledata.csv", function(data) {
  console.log(data);
  //var row =  data.find(a=> a.Cultivar == "Hawkeye");
  //treeData.push(row);
   //getrow(data,row.Male,"male");
   //getrow(data,row.Female,"female");
   datacsv = data;
   getnodedata("Mukden");
   console.log(Atreedatacorrected);
//console.log(data.columns);
});

function getemptyobject(properties){
  console.log(properties);
  var object={};
  properties.forEach(function(element, index, array){
    object[element] = "";

  });
console.log(object.toString());
  return object;
}

function getrow(data,cultivar,gender){
var row =  data.find(a=> a.Cultivar == cultivar);

if(row){
treeData.push(row);
// var father = getrow(data,row.Male);
// if(father){
// treeData.push(father);
// }
var parent={};
if(gender == "male"){
  console.log("male");
  parent = getrow(data,row.Male,"male");
}
else if(gender == "female"){
  console.log("female");
 parent = getrow(data,row.Female,"female");
}

if(parent){
treeData.push(parent);
}
}else {
  // console.log("new parent")
  // var newparent = getemptyobject(data.columns);
  // newparent["Cultivar"] = cultivar;
  // treeData.push(newparent);
}
}


function getnodedata(cultivar){
  var boole = Atreedatacorrected.find(a=> a.Cultivar == cultivar)
  if (boole) {
  return;
  }
  var node = datacsv.find(a=> a.Cultivar == cultivar);
  if(!node){
    return;
  }
  Atreedatacorrected.push(node);
 if(node.Male){
  getnodedata(node.Male);}
  if(node.Female){
  getnodedata(node.Female);}
}

console.log(Atreedatacorrected);
// var inventory = [
//    {name: 'apples', quantity: 2},
//    {name: 'bananas', quantity: 0},
//    {name: 'cherries', quantity: 5},
//    {name: 'cherries', quantity: 10}
// ];
// function test(fruitname){
//   console.log("i m hre");
//   return function (element) {
//      console.log("i m inside");
//      console.log(fruit);
//      console.log(fruitname);
//      return element.name === fruitname;}
// }
// console.log(inventory.find(a => a.name === "apples" && a.quantity == 1));

var table =[
  {"name": "Hawkeye",   "haschild": ""},
  {"name": "Richland",  "haschild": "Hawkeye"},
  {"name": "Mukden",  "haschild": "Hawkeye"},
  {"name": "Adams",  "haschild": "Richland"},
  {"name": "Harly",  "haschild": "Mukden"},
  {"name": "Monroe",   "haschild": "Mukden"},
  {"name": "Dunfield",  "haschild": "Adams"},
  {"name": "Illini",  "haschild": "Adams"},
  {"name": "Ankit",   "haschild": "Dunfield"},


]

var root = d3.stratify()
    .id(function(d) { return d.name; })
    .parentId(function(d) { return d.haschild; })
    (table);

    console.log(root);

    var margin = {top: 20, right: 90, bottom: 30, left: 90},
        width = 660 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    var treemap = d3.tree()
        .size([height, width]);
        var tooltip = d3.select("body").append("div").style("opacity","0").style("positon","absolute");

    //  assigns the data to a hierarchy using parent-child relationships
    // var nodes = d3.hierarchy(treeData, function(d) {
    //     return d.parentss;
    //   });

    // maps the node data to the tree layout
    nodes = treemap(root);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("body").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom),
        g = svg.append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

    // adds the links between the nodes
    var link = g.selectAll(".link")
        .data( nodes.descendants().slice(1))
      .enter().append("path")
        .attr("class", "link")
        //.style("stroke", function(d) { return d.data.level; })
        .attr("d", function(d) {
           return "M" + d.y + "," + d.x
             + "C" + (d.y + d.parent.y) / 2 + "," + d.x
             + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
             + " " + d.parent.y + "," + d.parent.x;
           });

    // adds each node as a group
    var node = g.selectAll(".node")
        .data(nodes.descendants())
      .enter().append("g")
       .attr("class", function(d) {
        return "node" +
         (d.children ? " node--internal" : " node--leaf"); })
        .attr("transform", function(d) {
          return "translate(" + d.y + "," + d.x + ")"; });

    // adds the circle to the node
    node.append("circle")
      .attr("r", 3 )
      .style("stroke", "steelblue")
      .style("fill", "#fff")
      .style("stroke-width" , 3);
    // adds the text to the node
    node.append("text")

      .style("text-anchor", function(d) {
        return d.children ? "end" : "start"; })
      .text(function(d) { return d.data.name; });
