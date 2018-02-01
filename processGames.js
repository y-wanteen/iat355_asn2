//Data source: Canvas sample datasets
var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/Video_Games_Sales_as_at_22_Dec_2016.csv";



d3.csv(url,function(data){

  // prints a divider between two data sheets in console
  console.log("    \n\n");


  //#1: Calculating min and max
  // referenced http://learnjsdata.com/summarize_data.html
  var minNA= d3.extent(data,function(d){  return +d['NA_Sales'];})
  var minEU= d3.extent(data,function(d){  return +d['EU_Sales'];})
  var minJP= d3.extent(data,function(d){  return +d['JP_Sales'];})
  var minGlobal= d3.extent(data,function(d){  return +d['Global_Sales'];})
  var minCS= d3.extent(data,function(d){  return +d['Critic_Score'];})
  var minUS= d3.extent(data,function(d){  return +d['User_Score'];})
  var minCC= d3.extent(data,function(d){  return +d['Critic_Count'];})
      //print in console
  console.log("1)Finding Min and Max of 7  Video Games Dimensions: "+
  "\n\nMin NA sale is " +minNA[0]+"         Max NA sale is "+minNA[1]+
  "\nMin EU Sales= " +minEU[0] +"           Max EU Sales= " +minEU[1]+
  "\nMin JP Sales= " +minJP[0] +"           Max JP Sales= " +minJP[1]+
  "\nMin Global Sales= " +minGlobal[0] +"   Max Global Sales= " +minGlobal[1]+
  "\nMin Critic Score= " +minCS[0] +"       Max Critic Score= " +minCS[1]+
  "\nMin User Score= " +minUS[0] +"         Max User Score= " +minUS[1]+
  "\nMin Critic Count= " +minCC[0] +"       Max Critic Count= " +minCC[1]) ;



//#2: Calculating sum of a quantitative dimension
// referenced https://github.com/d3/d3-array
 var sumNA= d3.sum(data,function(d){return +d['NA_Sales'];})
 var sumEU= d3.sum(data,function(d){return +d['EU_Sales'];})
 var sumJP= d3.sum(data,function(d){return +d['JP_Sales'];})
 var sumUC= d3.sum(data,function(d){return +d['User_Count'];})
 var sumCC= d3.sum(data,function(d){return +d['Critic_Count'];})
 var sumUS= d3.sum(data,function(d){return +d['User_Score'];})
 var sumCS= d3.sum(data,function(d){return +d['Critic_Score'];})

    //print in the console
 console.log("2) Total Sum of 7 Video Games Dimensions: "+
"\n\nTotal NA sale= " +sumNA+ "\nTotal EU sale= " +sumEU+
"\nTotal JP sale= " +sumJP+"\nTotal user count= " +sumUC+"\nTotal critic count " +sumCC+
"\nTotal user score= " +sumUS+"\nTotal critic score= " +sumCS);



  //#3: Average Value
  var avgNASales = getGameAverage(data, 'NA_Sales', false);
  var avgEUSales = getGameAverage(data, 'EU_Sales', false);
  var avgJPSales = getGameAverage(data, 'JP_Sales', false);
  var avgOtherSales = getGameAverage(data, 'Other_Sales', false);
  var avgGlobalSales = getGameAverage(data, 'Global_Sales', false);
  var avgCriticScore = getGameAverage(data,'Critic_Score', true);
  var avgUserScore = getGameAverage(data, 'User_Score', true);

  console.log("3) Average Values for 7 Video Game Dimensions: "+
    "\n\nAverage NA Sales: "+avgNASales+
    "\nAverage EU Sales: "+avgEUSales+
    "\nAverage JP Sales: "+avgJPSales+
    "\nAverage Other Sales: "+avgOtherSales+
    "\nAverage Global Sales: "+avgGlobalSales+
    "\nAverage Critic Score: "+avgCriticScore+
    "\nAverage User Score: "+avgUserScore);

  //#4: Count Dimension Criterion Matches
  var nameCount = countGameDimensionCriteria(data, 'Name', "Wii Sports");
  var platformCount = countGameDimensionCriteria(data, 'Platform', "DS");
  var releaseYearCount = countGameDimensionCriteria(data, 'Year_of_Release', "2006");
  var genreCount = countGameDimensionCriteria(data, 'Genre', "Role-Playing");
  var publisherCount = countGameDimensionCriteria(data, 'Publisher', "Nintendo");
  var developerCount = countGameDimensionCriteria(data, 'Developer', "SquareSoft");
  var ratingCount = countGameDimensionCriteria(data, 'Rating', "T");

    console.log("4) Count 7 Video Game Dimensions based on Criteria: "+
    "\n\nNumber of games named 'Wii Sports': "+nameCount+
    "\nNumber of games for the 'DS' platform: "+platformCount+
    "\nNumber of games released in '2006': "+releaseYearCount+
    "\nNumber of games from the 'Role-Playing' genre: "+genreCount+
    "\nNumber of games published by 'Nintendo': "+publisherCount+
    "\nNumber of games developed by 'SquareSoft': "+developerCount+
    "\nNumber of games rated 'T': "+ratingCount);
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

  return averageValue;

  //print to console
  // console.log("Average of "+ itemVariable +" = " + averageValue);
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

  return itemCount;
  // console.log("Number of " + itemCriteria + " games for " + dimension + " is: " + itemCount);
}
