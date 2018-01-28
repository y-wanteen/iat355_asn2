var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/Video_Games_Sales_as_at_22_Dec_2016.csv";


d3.csv(url,function(data){

//=====================calculating min and max
// referenced lab codes 9_d3_5
  var minNA= d3.min(data,function(d){  return +d['NA_Sales'];})
  var maxNA= d3.max(data,function(d){  return +d['NA_Sales'];})
  var minUC= d3.min(data,function(d){  return +d['User_Count'];})
  var maxUC= d3.max(data,function(d){  return +d['User_Count'];})
  var minYR= d3.min(data,function(d){  return +d['Year_Of_Release'];})
  var maxYR= d3.max(data,function(d){  return +d['Year_Of_Release'];})

  // console.log("  min NA sale " +minNA+"  and  max NA sale "+maxNA) ;
  d3.select("body")
  .append("p")
  .text(function (d){
      return "Minimum North American Sales= " +minNA +"; \n Maximum North American Sales= " +maxNA;
  });





//==========calculating sum of a quantitative dimension
// referenced https://github.com/d3/d3-array
 var sumNA= d3.sum(data,function(d){return +d['NA_Sales'];})
 var sumUC= d3.sum(data,function(d){return +d['User_Count'];})
 var sumCC= d3.sum(data,function(d){return +d['Critic_Count'];})

 // console.log(" total NA sale " +sumNA) ;
 d3.select("body")
 .append("p")
 .text(function (d){
     return "Sum of North American sales= " +sumNA+
    ", Sum of user count= " +sumUC+
    ", Sum of critic count= " +sumCC ;
 });
})
