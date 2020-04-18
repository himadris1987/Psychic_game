
 

    
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesLeft = 9;
let guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.querySelector(".misscleo").style.display="none"
function updateGuessesLeft() {
    document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    document.querySelector("#let").innerHTML = "Your Guesses so far: " + guessedLetters.join(", ");
};
var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    setTimeout(function() { document.querySelector(".misscleo").style.display = "none"; }, 5000);
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);
    var checkDouble = guessedLetters.includes(userGuess);
    var resetGuesses = function() {guessesLeft=9; document.querySelector("#guessLeft").innerHTML="";
    if (checkDouble === true){
        console.log("double letter");
        alert("Please try another letter");
        return false;
    }
    else if (check === false) {
        alert("Invalid key pressed");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                document.querySelector(".misscleo").style.display = "";
                document.querySelector(".misscleo").style.height = "4em";
                document.querySelector(".misscleo").innerHTML = "You are Psychic " + userGuess + " that was the letter!";
                resetGuesses();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            document.querySelector(".misscleo").style.display = "";
            document.querySelector(".misscleo").innerHTML = "Sorry you are no psychic" + letterToGuess;
            resetGuesses();

        }
        return false;
        } 
    else {
        alert("Error");
    }


};

