// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y){
  if(x > y){
    console.log("The greater number of " + x + " and " + y + " is " + x);
  }else if(y > x){
    console.log("The greater number of " + x + " and " + y + " is " + y);
  }else{
    console.log( x + " and " + y + " are equal.");
  }
}

greaterNum(5, 10);
greaterNum(5, 5);
greaterNum(8, 5);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(language){
  if(language == "fr"){
    console.log("Bonjour, Monde");
  }else if(language == "du"){
    console.log("Hello, Wereld");
  }else{
    console.log("Hello, World");
  }
}

helloWorld("fr");
helloWorld("du");
helloWorld("en");

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
  if( (score < 100) && (score > 79) ){
    console.log("A");
  }else if( (score < 80) && (score > 69) ){
    console.log("B");
  }else if( (score < 70) && (score > 59) ){
    console.log("C");
  }else if( (score < 60) && (score > 49) ){
    console.log("D");
  }else{
    console.log("F");
  }
}

assignGrade(90);
assignGrade(67);
assignGrade(74);
assignGrade(52);
assignGrade(49);

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number){
  var noun
  var number

  if(noun == "mouse"){
    noun = "mice";
    console.log(number + " " + noun);
  }
  if(noun == "goose"){
    noun = "geese";
    console.log(number + " " + noun);
  }
  if(noun == "octopus"){
    noun = "octopi";
    console.log(number + " " + noun);
  }
  else{
    if( (number > 1) || (number == 0) ){
      console.log(number + " " + noun +"s");
    }
    else{
      console.log(number + " " + noun)
    }
  }
}

pluralize("cat", 2);
pluralize("dog", 1);
pluralize("horse", 0);
pluralize("mouse", 2);
pluralize("goose", 5);
pluralize("octopus", 8);
