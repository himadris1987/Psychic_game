var computerChoices={"a"}
let wins= 0;
let losses=0;
let numberofguesses=9;
let guessesleft=9;
let lettersguessed[];

var computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];

function updateGuessesLeft(){document.querySelector("#guessesleft").innerHTML="Number of Guesses Left:" + guessesleft;

function guessessofar(){document.querySelector9("#let").innerHTML="Your Guesses" + lettersguessed.join(", ");

var reset = function(){numbersofguesses=9; guessesleft=9; lettersguessed=[]; updateguessesleft();}

document.onkeyup=function(event){
    var userguess=String.fromCharCode(event.keyCode).toLowerCase();
    var check=computerChoices.includes(userguess);
    var alreadyplayed=letttersguessed.includes(userguess);

    if (alreadyplayed===true){console.log("already played");
    alert ("You already tried that letter, guess again?");
return false;}
}

else if (correct===true) {guessesleft--; lettersguessed.push(userguess);
    updateguessedleft();

if (guessesleft > 0){
    if (userguess=lettertoguess) {wins++};
    document.querySelector("#Wins").innerHtml="Wins:" + wins;
    reset();
}
else if (guessesleft==0){losses++};
document.querySelector("#losses").innerHTML="Losses:"+losses;
reset()