//Data source: Canvas sample datasets
var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/Video_Games_Sales_as_at_22_Dec_2016.csv";


d3.csv(url,function(data){

  //#1: Calculating min and max
  // referenced lab codes 9_d3_5
  var minNA= d3.min(data,function(d){  return +d['NA_Sales'];})
  var maxNA= d3.max(data,function(d){  return +d['NA_Sales'];})
  var minEU= d3.min(data,function(d){  return +d['EU_Sales'];})
  var maxEU= d3.max(data,function(d){  return +d['EU_Sales'];})
  var minJP= d3.min(data,function(d){  return +d['JP_Sales'];})
  var maxJP= d3.max(data,function(d){  return +d['JP_Sales'];})
  var minGlobal= d3.min(data,function(d){  return +d['Global_Sales'];})
  var maxGlobal= d3.max(data,function(d){  return +d['Global_Sales'];})
  var minCS= d3.min(data,function(d){  return +d['Critic_Score'];})
  var maxCS= d3.max(data,function(d){  return +d['Critic_Score'];})
  var minUS= d3.min(data,function(d){  return +d['User_Score'];})
  var maxUS= d3.max(data,function(d){  return +d['User_Score'];})
  var minCC= d3.min(data,function(d){  return +d['Critic_Count'];})
  var maxCC= d3.max(data,function(d){  return +d['Critic_Count'];})

  console.log("Min NA sale is " +minNA+"\nMax NA sale is "+maxNA) ;
  console.log("Min EU Sales= " +minEU +"\nMax EU Sales= " +maxEU) ;
  console.log("Min JP Sales= " +minJP +"\nMax JP Sales= " +maxJP) ;
  console.log( "Min Global Sales= " +minGlobal +"\nMax Global Sales= " +maxGlobal) ;
  console.log("Min Critic Score= " +minCS +"\nMax Critic Score= " +maxCS) ;
  console.log("Min User Score= " +minUS +"\nMax User Score= " +maxUS) ;;
  console.log("Min Critic Count= " +minCC +"\nMax Critic Count= " +maxCC) ;



//#2: Calculating sum of a quantitative dimension
// referenced https://github.com/d3/d3-array
 var sumNA= d3.sum(data,function(d){return +d['NA_Sales'];})
 var sumEU= d3.sum(data,function(d){return +d['EU_Sales'];})
 var sumJP= d3.sum(data,function(d){return +d['JP_Sales'];})
 var sumUC= d3.sum(data,function(d){return +d['User_Count'];})
 var sumCC= d3.sum(data,function(d){return +d['Critic_Count'];})
 var sumUS= d3.sum(data,function(d){return +d['User_Score'];})
 var sumCS= d3.sum(data,function(d){return +d['Critic_Score'];})

 console.log("Total NA sale " +sumNA+ "\nTotal EU sale " +sumEU+
"\nTotal JP sale " +sumJP+"\nTotal user count " +sumUC+"\nTotal critic count " +sumCC+
"\nTotal user score " +sumUS+"\nTotal critic score " +sumCS);



  //#3: Average Value
  getGameAverage(data, 'NA_Sales', false);
  getGameAverage(data, 'EU_Sales', false);
  getGameAverage(data, 'JP_Sales', false);
  getGameAverage(data, 'Other_Sales', false);
  getGameAverage(data, 'Global_Sales', false);
  getGameAverage(data,'Critic_Score', true);
  getGameAverage(data, 'User_Score', true);
  getGameAverage(data, 'User_Count', true);

  //#4: Count Dimension Criterion Matches
  countGameDimensionCriteria(data, 'Platform', "DS");

});


//Get average of values for column
function getGameAverage(data, itemVariable, filtered)
{
  if (filtered == true)
  {
    //filter items and return value as integer
    var valueArray = data.filter(function (d, i)
    {
      // if (i < 20) //<- constraint for how many data items to go through
      // {
        // console.log(+value)
        // console.log(+d[itemVariable]);
        return (+d[itemVariable]);
      // }
    });
  }
  else
  {
    var valueArray = data;
  }

  //get average value
  var averageValue = d3.mean(valueArray, function(d){return +d[itemVariable];});

  //print to console
  console.log("Average of "+ itemVariable +" = " + averageValue);
}

function countGameDimensionCriteria(data, dimension, itemCriteria)
{
  var itemCount = 0;

  data.forEach(function(d, i)
  {
    // if (i < 5000) //<- constraint for how many data items to go through
    // {
      if (d[dimension].startsWith(itemCriteria))
      {
        itemCount++;
      }
    // }
  });

  console.log("Number of " + itemCriteria + " games for " + dimension + " is: " + itemCount);
}
