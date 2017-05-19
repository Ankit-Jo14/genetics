var height = 200;
var width = 500;
var margin = {left: 50,right:50,top:40,bottom:0};

var tree = d3.tree().size([width,height]);
var tooltip = d3.select("body").append("div").style("opacity","0").style("positon","absolute");

var svg = d3.select('body').append('svg').attr('width','100%').attr('height','100%');
var chartGroup = svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')');

function diagonal(d) {
  return "M" + d.y + "," + d.x
      + "C" + (d.parent.y + 100) + "," + d.x
      + " " + (d.parent.y + 100) + "," + d.parent.x
      + " " + d.parent.y + "," + d.parent.x;
}
d3.json('treeData.json').get(function(error,data){
  console.log(data[0]);
  var root = d3.hierarchy(data[0]);
  tree(root);
  console.log(root.descendants());

  var nodes = chartGroup.selectAll("g")
    .data(root.descendants()).enter()
    .append("g");

  var circles = nodes.append("circle")
            .attr("cx",function(d){ return d.x; })
            .attr("cy",function(d){ return d.y; })
            .attr("r","5")
            .on("mousemove",function (d) {
              tooltip.style("opacity","1")
              .style("left",d3.event.pageX+"px")
              .style("top",d3.event.pageY+"px");

              tooltip.html("x:"+d.x +" y:"+ d.y);

            })
            .on("mouseout",function (d) {
              tooltip.style("opacity","0")
              .style("left",d3.event.pageX+"px")
              .style("top",d3.event.pageY+"px");

              tooltip.html("uhuk"+ d.x);

            });

    nodes.append("text")
    .attr("dx", function(d){return d.x})
    .attr("dy", function(d){return d.y})
    .text(function(d) { return d.data.name });;



  chartGroup.selectAll("path")
    .data(root.descendants().slice(1))
    .enter().append("path")
            .attr("class","link")
            .attr("d",diagonal);
});
