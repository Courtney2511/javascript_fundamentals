// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = "Web Developer";
var geoLocation = "Toronto";
var partner = "James";
var numberOfKids = 2;

console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partner + " with " + numberOfKids + " kids.");


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.

var currentYear = 2016;
var birthYear = 1980;
var age = currentYear - birthYear

console.log("They are " + age + " years old.");

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 35;
var maxAge = 125;
var estAmount = 8;
var age = maxAge - currentAge

var lifetimeSnacks = age * estAmount;

console.log("You will need " + lifetimeSnacks + " to last you until the ripe old age of X");


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 10

var circumference = (2 * radius * 3.14);
var area = (radius * radius) * 3.14;

console.log("The circumference is " + circumference)
console.log("the area is " + area)


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F". F = c * 9/5 + 32
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C." C = (f -32)/ (9/5)

var celsiusTemp = 50;
var fahrenheitTemp = celsiusTemp * ( 9/5 ) + 32;

console.log( celsiusTemp + "°C is " + fahrenheitTemp + "°F" );

var fahrenheitTemp = 100
var celsiusTemp = ( fahrenheitTemp - 32 ) / ( 9/5 )

console.log( fahrenheitTemp + "°F is " + celsiusTemp + "°C");
