// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have
// properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
  title: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "coca"],
};

console.log(recipe.title);
console.log("Serves: " + recipe.serves);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties
// for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like
// so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not.
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
// log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var myBooks = [
  {title: "Blink",
   author: "Malcolm Gladwell",
   readYet: true},
  {title: "Hamlet",
    author: "William Shakespeare",
    readYet: true},
  {title: "Catcher in the Rye",
   author: "JD Salinger",
   readYet: false},
  {title: "Rails Tutorial",
    author: "Michael Hartl",
    readYet: false},
  {title: "Not That Kind of Girl",
    author: "Lena Dunham",
    readYet: true}
]

for (i = 0; i < myBooks.length; i++) {
  var myBook = myBooks[i];

  if( myBook.readYet == true ) {
    console.log("You have already read " + myBook.title + ", by " + myBook.author)
  }
  else{
    console.log("You have not read " + myBook.title + ", by " + myBook.author)
  }
}

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string),
// duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so:
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var movie = {
  title: "The Last Unicorn",
  duration: 84,
  stars: {1: "Jeff Bridges", 2: "Mia Farrow", 3: "Angela Lansbury"}
}

function movieDetails(movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars[0] + ", " + movie.stars[1] + ", " + movie.stars[2] + ".")
}

movieDetails(movie);
