//Data source: Canvas sample datasets

// References:
// tutorial 9 d3_3 load data and d3_5 process data
// http://learnjsdata.com/summarize_data.html

var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/SimpleCereals.csv";


d3.csv(url, function(data)
{

	//#1: Calculating min and max
	// referenced http://learnjsdata.com/summarize_data.html
	var minCalorie= d3.extent(data,function(d){  return +d['calories'];})
	var minProtein= d3.extent(data,function(d){  return +d['protein'];})
	var minFat= d3.extent(data,function(d){  return +d['fat'];})
	var minSodium= d3.extent(data,function(d){  return +d['sodium'];})
	var minFiber= d3.extent(data,function(d){  return +d['fiber'];})
	var minCarbs= d3.extent(data,function(d){  return +d['carbo'];})
	var minRating= d3.extent(data,function(d){  return +d['rating'];})

	console.log("1)Finding Min and Max of 7 Cereal Brands Dimensions: "+
	"\n\nMin calories count= " +minCalorie[0]+"			Max calories count= "+minCalorie[1]+
	"\nMin protein count= " +minProtein[0] +"			Max protein count= " +minProtein[1]+
	"\nMin fat count= " +minFat[0] +"	 			Max fat count= " +minFat[1]+
	"\nMin sodium count= " +minSodium[0] +"				Max sodium count= " +minSodium[1]+
	"\nMin fiber count= " +minFiber[0] +"				Max fiber count= " +minFiber[1]+
	"\nMin carbs count= " +minCarbs[0] +"				Max carbs count= " +minCarbs[1]+
	"\nMin rating score= " +minRating[0] +"		Max rating score= " +minRating[1]) ;



//#2: Calculating sum of a quantitative dimension
// referenced https://github.com/d3/d3-array
 var sumShelf= d3.sum(data,function(d){return +d['shelf'];})
 var sumWeight= d3.sum(data,function(d){return +d['weight'];})
 var sumCups= d3.sum(data,function(d){return +d['cups'];})
 var sumVit= d3.sum(data,function(d){return +d['vitamins'];})
 var sumPotas= d3.sum(data,function(d){return +d['potass'];})
 var sumSug= d3.sum(data,function(d){return +d['sugars'];})
 var sumCarbs= d3.sum(data,function(d){return +d['carbo'];})

 console.log("2) Total Sum of 7 Cereal Brands Dimensions: "+
"\n\nTotal shelves= " +sumShelf+ "\nTotal weight= " +sumWeight+
"\nTotal cups= " +sumCups+"\nTotal vitamins= " +sumVit+"\nTotal potassium= " + sumPotas+
"\nTotal sugars= " +sumSug+"\nTotal carbs= " +sumCarbs);


	//#3: Average Value
	getCerealAverage(data,'calories');
	getCerealAverage(data,'protein');
	getCerealAverage(data,'fat');
	getCerealAverage(data,'sodium');
	getCerealAverage(data,'fiber');
	getCerealAverage(data,'carbo');
	getCerealAverage(data,'sugars');

	//#4: Count Dimension Criterion Matches
	countCerealDimensionCriteria(data, 'name', "Cheerios");
	countCerealDimensionCriteria(data, 'mfr', "K");
	countCerealDimensionCriteria(data, 'Serve', "C");
	countCerealDimensionCriteria(data, 'calories', "110");
	countCerealDimensionCriteria(data, 'fat', "0");
	countCerealDimensionCriteria(data, 'vitamins', "25");
	countCerealDimensionCriteria(data, 'Type', "Regular");

});


//Get average of values for column
function getCerealAverage(data, itemVariable)
{
	//get average value
	var averageValue = d3.mean(data, function(d){return +d[itemVariable]});

	//print to console
	console.log("Average of "+ itemVariable +" = " + averageValue);
}

function countCerealDimensionCriteria(data, dimension, itemCriteria)
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

	console.log("Number of " + itemCriteria + " cereal for " + dimension + " is: " + itemCount);
}
