// String Methods Challenge

// Challenge 1:
const job = "I am a frontend developer";

// select f letter then make it capital
let myJob = job.charAt(7).toUpperCase() + job.substring(8, 15);

myJob = `${job.charAt(7).toUpperCase()}${job.substring(8, 15)}`;

console.log(job.charAt(7).toUpperCase() + job.substring(8, 15));

// Output: Frontend

// Challenge 2
const title = "frontEnd Developer";

console.log(title.charAt(0).toUpperCase() + title.substring(1).toLowerCase());

// Output: Frontend developer
