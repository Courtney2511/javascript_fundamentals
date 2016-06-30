// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function fortuneTeller(jobTitle, geoLocation, partner, numberOfKids){
  console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + numberOfKids + " kids.");
}

fortuneTeller("Web Developer", "Toronto", "James", 2);
fortuneTeller( "Surgeon", "Florida", "James", 0 );
fortuneTeller( "Forensic Pathologist", "London", "James", 3 );

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

var currentYear = new Date().getFullYear();

function calculateAge(birthYear){
  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;
  console.log( "You are either " + age2 + " or " + age1 );
}

calculateAge(1980);
calculateAge(1976);
calculateAge(1955);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var maxAge = 100;

function calculateSupply(age, amountPerDay){
  lifetime = maxAge - age;
  lifetimeSupply = ( lifetime * amountPerDay );
  console.log("You will need " + Math.round(lifetimeSupply) + " to last you until the ripe old age of " + maxAge );
}

calculateSupply(35, 1.123);
calculateSupply(40, 0.5149);
calculateSupply(10, 10.003);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
  circumference = (2 * radius * 3.14);
  console.log("The circumference is " + circumference + ".")
}

calcCircumference(100);
calcCircumference(10);
calcCircumference(25);

function calcArea(radius){
  area = ( radius * radius) * 3.14;
  console.log("The area is " + area + ".");
}

calcArea(100);
calcArea(10);
calcArea(25);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(celsiusTemp){
  fahrenheitTemp = celsiusTemp * ( 9/5 ) + 32;
  console.log( celsiusTemp + "°C is " + fahrenheitTemp + "°F" );
}

celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
celsiusToFahrenheit(40);

function fahrenheitToCelsius(fahrenheitTemp){
  celsiusTemp = ( fahrenheitTemp - 32 ) / ( 9/5 );
  console.log( fahrenheitTemp + "°F is " + Math.round(celsiusTemp) + "°C");
}

fahrenheitToCelsius(0);
fahrenheitToCelsius(100);
fahrenheitToCelsius(40);
