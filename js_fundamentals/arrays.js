// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var topChoices = ["tacos", "sushi", "cats", "music", "sleeping"];
for (var i = 0; topChoices[i]; i++) {
  console.log("My #"+ (i+1) + " choice is " + topChoices[i]);
}

var topChoices = ["tacos", "sushi", "cats", "music", "sleeping"];



for (var i = 0; topChoices[i]; i++) {
  var position = (i + 1)
  var suffix
    if( position = 1){
      suffix = "st"
    }else if( position = 2){
      suffix = "nd"
    }else if( position = 3){
      suffix = "rd"
    }else if( position = 4){
      suffix = "th"
    }else{
      suffix = "th"
    }
  console.log("My " + (i+1) + suffix + " choice is " + topChoices[i]);
}
