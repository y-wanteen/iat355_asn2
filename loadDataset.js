// References: 
// tutorial 9 d3_3 load data and d3_5 process data
// http://learnjsdata.com/summarize_data.html

var url = "http://www.sfu.ca/~wanteeny/iat355/asn2/data/Video_Games_Sales_as_at_22_Dec_2016.csv";

// Values in dataset
// var Name;
// var Platform;
// var Year_Of_Release;
// var Genre;
// var Publisher;
// var NA_Sales;
// var EU_Sales;
// var JP_Sales;
// var Other_Sales;
// var Global_Sales;
// var Critic_Score;
// var Critic_Count;
// var User_Score;
// var User_Count;
// var Developer;
// var Rating;

// d3.csv(url)
// 	.row(function(d){

// 		// get data values of each object?, convert numbers from string to integer
// 		// d.Name = d.Name;
// 		// d.Platform = d.Platform;
// 		// d.Year_Of_Release = +d.Year_Of_Release;
// 		d.Critic_Score = +d.Critic_Score;

// 		// return object
// 		// console.log(d)
// 		// console.log(d.Critic_Count)
// 		return d;
// 	})
// 	.get(function(error, data){
// 		// console.log(data)
// 	})


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