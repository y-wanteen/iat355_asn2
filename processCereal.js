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
	var avgCalories = getCerealAverage(data,'calories');
	var avgProtein = getCerealAverage(data,'protein');
	var avgFat = getCerealAverage(data,'fat');
	var avgSodium = getCerealAverage(data,'sodium');
	var avgFiber = getCerealAverage(data,'fiber');
	var avgCarbo = getCerealAverage(data,'carbo');
	var avgSugars = getCerealAverage(data,'sugars');

	console.log("3) Average Values for 7 Cereal Dimensions: "+
    "\n\nAverage Calories: "+ avgCalories +
    "\nAverage Protein: "+avgProtein+
    "\nAverage Fat: "+avgFat+
    "\nAverage Sodium: "+avgSodium+
    "\nAverage Fiber: "+avgFiber+
    "\nAverage Carbohydrates: "+avgCarbo+
    "\nAverage Sugars: "+avgSugars);

	//#4: Count Dimension Criterion Matches
	var nameCount = countCerealDimensionCriteria(data, 'name', "Cheerios");
	var mfrCount = countCerealDimensionCriteria(data, 'mfr', "K");
	var serveCount = countCerealDimensionCriteria(data, 'Serve', "C");
	var caloriesCount = countCerealDimensionCriteria(data, 'calories', "110");
	var fatCount = countCerealDimensionCriteria(data, 'fat', "0");
	var vitaminsCount = countCerealDimensionCriteria(data, 'vitamins', "25");
	var typeCount = countCerealDimensionCriteria(data, 'Type', "Regular");

	console.log("4) Count 7 Cereal Dimensions based on Criteria: "+
    "\n\nNumber of cereals named 'Cheerios: "+nameCount+
    "\nNumber of cereals manufactured by 'K': "+mfrCount+
    "\nNumber of cereals with serving size 'C'': "+serveCount+
    "\nNumber of cereals with '110' calories "+caloriesCount+
    "\nNumber of cereals with '0' fat: "+fatCount+
    "\nNumber of cereals with '25' vitamins: "+vitaminsCount+
    "\nNumber of cereals of 'Regular' type: "+typeCount);

});


//Get average of values for column
function getCerealAverage(data, itemVariable)
{
	//get average value
	var averageValue = d3.mean(data, function(d){return +d[itemVariable]});

	return averageValue;

	//print to console
	// console.log("Average of "+ itemVariable +" = " + averageValue);
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

	return itemCount;

	// console.log("Number of " + itemCriteria + " cereal for " + dimension + " is: " + itemCount);
}
