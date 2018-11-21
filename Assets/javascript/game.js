// create the array for when the wrong letter was pressed
// create the variable for total number of lives
// create the array for the underscore placeholders
// create an array for the userGuesses (specifically the onkey )
var wordBank = ["nuggets", "fries", "mcflurry", "soda", "cheeseburger"]
var wrongLetter = [];
var guessesLeft = 9;
var underScores = [];
var userGuesses = [];
var randWord = [];
var remainingLetters = [];



// function
// ==================
function startGame() {
    // storing the words, empty it out 
    document.getElementById("visualWord").textContent = "";
    // picks random word
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // to show what the random word is and guess correctly
    console.log("random word =" + randWord);
    var remainingLetters = randWord.length;
    console.log(remainingLetters);

    // create a loop so every time a random word is chosen
    // the underscores are pushed onto the page with the amount of underscores need to create the word
    underScores = [];
    // create the word options
    for (var i = 0; i < randWord.length; i++) {
        underScores.push("_ ");
        // if( underScores.push("_ ")=== randWord){
        //     console.log("win");
        // }





    }

    // var remainingLetters = randWord.length;
    // console.log(remainingLetters);


    // printing underScores to the screen

    document.getElementById("visualWord").textContent = underScores.join("");
    console.log(underScores);


    // PRINT ON THE SCREEN
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("wrongLetter").textContent = wrongLetter;

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
                // sets the underscores the same as the userguesses
                underScores[i] = userGuesses;

                // prints the userGuesses onto the underscore it belongs too (if its in the word)
                // create an array for the randomized word chosen in the wordBank
                document.getElementById("visualWord").textContent = underScores.join(" ");

                remainingLetters++;
                document.getElementById("remainingLetters").textContent = "letters guessed correctly: " + remainingLetters;
                console.log(randWord.length);
                
                
                console.log(underScores);
                console.log(randWord);
                
                
            } 
            if (remainingLetters == randWord.length) {
                
                alert("Congrats bud, you did it!" + " You ordered " + randWord);
                // reset the letters used
                remainingLetters = [];
                document.getElementById("remainingLetters").textContent = "letters guessed correctly: " + remainingLetters;
                //  empty the letters used
                wrongLetter = [];
                // reset the lives for the user
                guessesLeft = 9;
                
                startGame();
                
            }
            
            

        }
        
    }
    // if the letter doesnt exist then you push towards the wrong letter array
    else {
        wrongLetter.push(userGuesses);
        // minus 1 the amount of lives the user has
        guessesLeft--;

        // set the wrongLetter index equal to the key pressed by the user
        wrongLetter[i] = userGuesses;

        // this prints the amount of lives the users has left
        document.getElementById("guesses-left").textContent = guessesLeft;

        // this prints the letters used that were wrong 
        document.getElementById("wrongLetter").textContent = wrongLetter.join(",");

    }
    // creating a loop for when the user attempts reaches zero
    // you technically end the game 
    // and then reset to the start

    // the loops starts with 0 so the alert only goes off onces but it repeats every new game
    // rather than increase, it decreases with the userLIves (starts off at 9 for me)
    for (var i = 0; i > -1; i--) {

        // if the guessesLeft IS the number -1
        if (guessesLeft == 0) {

            // show up as "fuck."
            alert("YOU LOSE! muaaahahahahahahaha!");

            //  empty the letters used
            wrongLetter = [];
            // reset the lives for the user
            guessesLeft = 9;
            // reset the letters used
            remainingLetters = [];
            document.getElementById("remainingLetters").textContent = "letters guessed correctly: " + remainingLetters;


            // resets the game when loose
            //try to make sure the underscores are empty
            startGame();

        }

        console.log(wrongLetter);
        console.log(guessesLeft);
    }


}



// Main
// ==========================================
startGame();
