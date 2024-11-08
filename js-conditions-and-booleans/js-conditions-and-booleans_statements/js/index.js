console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "johannes";
if (receivedPassword !== SUPER_SECRET_PASSWORD) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}
// Part 2: Even / Odd
const number = 13;
if (number % 2 === 0) {
  console.log("Your number:", number, " is even.");
} else {
  console.log("Your number:", number, " is an odd number.");
}
// Part 3: Hotdogs
const numberOfHotdogs = 3;
let priceForHotdogs;
if (numberOfHotdogs < 5) {
  priceForHotdogs = numberOfHotdogs * 2;
  console.log("You have to pay ", priceForHotdogs, "€");
} else if (numberOfHotdogs < 100) {
    priceForHotdogs = numberOfHotdogs * 1.5;
    console.log("You have to pay ", priceForHotdogs, "€");  
} else if (numberOfHotdogs < 1000000) {
    priceForHotdogs = numberOfHotdogs * 1;
    console.log("You have to pay ", priceForHotdogs, "€");  
} else {
    priceForHotdogs = numberOfHotdogs * 0.1;
    console.log("You have to pay ", priceForHotdogs, "€");
}

// Part 4: Daytime
const currentHour = 18;

let statement = "";
currentHour < 17 ? statement = "Still need to learn ..." :
   statement = "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Klaus";

const greeting = "Hello " + ((userName === "Klaus") ? "Coach" : userName) + "!" ;

console.log(greeting);
