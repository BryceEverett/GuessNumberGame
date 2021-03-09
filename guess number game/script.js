
//#region Guess My Number
let totalGuesses = 0;
var totalScore = 0;
let correctGuesses = 0;
var lives = 5;
let highscore = 0;
var playerGuess = [];

randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//works the scoring button
function scoreSubmit() {
  document.getElementById("highscore").innerHTML = "Highscore: " + highscore;
  if (totalScore > highscore) {
    highscore = totalScore;
  } else {
    highscore = highscore;
  }
}

//works the reset button
function resetFunction() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("win").innerHTML = "";
  correctGuesses = 0;
  totalScore = 0;
}

//works the submit button
function myFunction() {
  var x, text;
  x = document.getElementById("numb").value;

  //cancels the game and displays you win screen
  if (correctGuesses == 19) {
    document.getElementById("win").innerHTML = "You Won!";
    document.getElementById("submitBtn").disabled = true;
  }
  //detects whether or not the number inputed is in boundries
  if (x < 1 || x > 20) {
    text = "Halt... you need to enter a number between 1 & 20.";
    document.getElementById("response").innerHTML = text;

    //Actvates everything when the question is answered correctly
  } else if (x == randomNumber) {
    text = "You used Inspect, cheater";
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML =
      "The number I chose was " + randomNumber;
    document.getElementById("yourGuess").innerHTML = "You chose " + x;
    totalScore = totalScore + 5;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("corGuess").innerHTML =
      "Correct Guesses: " + ++correctGuesses;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);

    //Activates When the question is missed
  } else {
    text = "You missed Try Again";
    document.getElementById("response").innerHTML = text;
    document.getElementById("yourGuess").innerHTML = "You chose " + x;
    totalScore = totalScore - 2;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("geuNum").innerHTML = "Guessed Numbers: " + x;
  }

  playerGuess.push(x);
  document.getElementById("gueNum").innerHTML =
    "Numbers Guessed: " + playerGuess;
}
//#endregion



