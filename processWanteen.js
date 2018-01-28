// References: 
// tutorial 9 d3_3 load data and d3_5 process data
// http://learnjsdata.com/summarize_data.html

var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/Video_Games_Sales_as_at_22_Dec_2016.csv";

d3.csv(url, function(data)
{

	//#3: Average Value
	getAverage(data,'Critic_Score');

	//#4: Count Dimension Criterion Matches
	countDimensionCriteria(data, 'Platform', "DS");

});


//Get average of values for column
function getAverage(data, itemVariable)
{
	//filter items for value and return value as integer
	var valueArray = data.filter(function (d, i)
	{
		// if (i < 5000) //<- constraint for how many data items to go through
		// {
			// console.log(+value)
			return +d[itemVariable];
		// }
	});

	//get average value
	var averageValue = d3.mean(valueArray, function(d) { return +d[itemVariable]});
	
	//print to console
	console.log("Average of "+ itemVariable +" = " + averageValue);
}

function countDimensionCriteria(data, dimension, itemCriteria)
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