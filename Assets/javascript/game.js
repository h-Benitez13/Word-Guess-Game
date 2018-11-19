var wordBank = ["nuggets", "fries", "cheeseburger", "mcflurry", "soda"]
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord = [];
// function
// ==================
function startGame() {
    // picks random word
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random word =" + randWord);
    for (var i = 0; i < randWord.length; i++) {
        underScores.push("_ ");

    }
    // printing underScores to the screen

    document.getElementById("visualWord").textContent = underScores.join("");
    console.log(underScores);

    // reset whenever we start the game
    wrongLetter = [];
    guessesLeft = 9;

    // PRINT ON THE SCREEN
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("wrongLetter").textContent = "Letters guessed: " + wrongLetter;

}

// capture the users input
document.onkeyup = function (event) {
    userGuesses = event.key;

    // logiccccc
    // if the letter pressed is within the array word
    //  
    if (randWord.indexOf(userGuesses) > -1) {
        // if the letter exist inside the word
        // then put in the underscore
        for (var i = 0; i < randWord.length; i++) {
            if (randWord[i] === userGuesses) {
                underScores[i] = userGuesses;
                console.log(underScores);
                
                
            }
        }
    }
    // if the letter doesnt exist then you push towards the wrong letter array
    else if (randWord[i] ===  randWord[i]) {
        wrongLetter.push(userGuesses);
        guessesLeft--;

        console.log(wrongLetter);
        console.log(guessesLeft);
    }
    function winLose(){
        if (guessesLeft === 0){
            alert("loser");
        }
    }
    
}
// Main
// ==========================================

startGame();
