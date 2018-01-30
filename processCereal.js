//Data source: Canvas sample datasets

// References:
// tutorial 9 d3_3 load data and d3_5 process data
// http://learnjsdata.com/summarize_data.html

var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/SimpleCereals.csv";


d3.csv(url, function(data)
{

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
