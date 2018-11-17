//first off, we need a word array
//for zee guesses
//and a topic: mcdonalds menu

var words =     ["nuggets", "fries", "cheeseburger", "mcflurry", "soda"]

//next want to randomize the words
//jquery lesson with Math (:

var random= Math.floor(Math.random()*(words.length-1));

//i want the word chosen to be random
//randomized word chosen to display 
//for le guessing
//set up the amount of guesses the player has

var randomWord = words[random];
var wordRate = new Array(randomWord.length);
var attempts = 0;

//creating the loop the underscore
//is presented every new word
for (var i=0; i < wordRate.length; i++) {
    wordRate [i] = "_";
}

//actual printing of the underscore
function printwordRate() {
    for (var i=0; i<  wordRate.length; i++){
        var ratefeld = document.getElementById("ratefeld");
        var turtle = document.createTextNode(wordRate[i]);
        ratefeld.appendChild(turtle);
        }
    }

//now we are moving towards the user
//check to see if the letter the user guessed
//is in the word
var guesser = function (){
    var answerInput = document.submitbox;
    var activy = answerInput.elements["user-guess"];
    var letra = activy.value; //should be the letter the user enters in my little box >:)
        letra= letra.toLowerCase();

        //if the letter guess is correct is within the guess word
    for (var i=0; i<randomWord.length; i++){
        if(randomWord[i] === letra){
            wordRate [i] = letra + " ";
            var entrance = true; 
        }
    activy.value=" "
    }

    //
}