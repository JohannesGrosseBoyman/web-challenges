console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Message from Josh";
const text = "Today I did a run in the morning";
let numberOfLikes = 23;
const authorName = "Johannes Große Boymann";
let isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
console.log(text);
console.log("Number of likes: ", numberOfLikes);
console.log(authorName);
console.log(isReported);
numberOfLikes++;
console.log("Number of likes increased: ", numberOfLikes);
// --^-- write your code here --^--
