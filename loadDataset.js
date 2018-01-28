// Reference: tutorial 9 d3 load data

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

d3.csv(url)
	.row(function(d){

		// get data values of each object?, convert numbers from string to integer
		// d.Name = d.Name;
		// d.Platform = d.Platform;
		// d.Year_Of_Release += d.Year_Of_Release;
		d.NA_Sales = +d.NA_Sales;


		// return object
		// console.log(d)
		// console.log(d.NA_Sales);
		return d;
	})
	.get(function(error, data){
		console.log(data)
	})
