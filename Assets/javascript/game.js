//first off, we need a word array
//for zee guesses
//and a topic: mcdonalds menu
//create all the variables for the game 
//letters array to be chosen for each word
//answer array where the user guesses the letter
//letters that have been selected array that are not in the word


var words =     ["nuggets", "fries", "cheeseburger", "mcflurry", "soda"]
let letter = 'abcdefghijklmnopqrstuvwxyz'.split(" ");
var asnwerArray= [];
var wrongGuess= [];


//next want to randomize the words
//jquery lesson with Math (:

var random= Math.floor(Math.random()*(words.length));