//#region Iteration Code
var text = "";
var i = 0;

function looperino(){
    while(i <10){
        text +="<br> The number is " +i;
        i++;
        console.log(text);
    }
    document.getElementById("demo").innerHTML =text;
}

function clearField(){
    document.getElementById("demo").innerHTML ="";
}

//#endregion 

//#region Guess My Number
let totalGuesses = 0;
let totalScore = 0;
let correctGuesses= 0;
var lives= 5;
randomNumber = Math.floor (Math.random()* 20)+1;
console.log(randomNumber);
//works the reset button
function resetFunction(){
    randomNumber = Math.floor (Math.random()* 20)+1;
    console.log(randomNumber);
}
   
//works the submit button 
function myFunction(){
    var x, text;
    x = document.getElementById("numb").value


//cancels the game and displays you win screen
if(correctGuesses == 19){
    document.getElementById("win").innerHTML = "You Won!"
    document.getElementById("submitBtn").disabled = true;
}
//detects whether or not the number inputed is in boundries  
    if(x<1 || x>20){
        text = "Halt... you need to enter a number between 1 & 20."
        document.getElementById("response").innerHTML = text;
        
    //Actvates everything when the question is answered correctly 
    }else if(x==randomNumber){
    text = "You used Inspect, cheater"
    document.getElementById("response").innerHTML = text;
    document.getElementById("answer").innerHTML = "The number I chose was " + randomNumber;
    document.getElementById("yourGuess").innerHTML = "You chose " + x; 
    totalScore = totalScore + 5;
    document.getElementById("score").innerHTML = "Score: " + totalScore;
    document.getElementById("corGuess").innerHTML = "Correct Guesses: " + ++correctGuesses;
    randomNumber = Math.floor (Math.random()* 20)+1;
    console.log(randomNumber);

    //Activates When the question is missed 
    }else{
        text = "You missed Try Again"
        document.getElementById("response").innerHTML = text;
        document.getElementById("yourGuess").innerHTML = "You chose " + x; 
        totalScore = totalScore - 2;
        document.getElementById("score").innerHTML = "Score: " + totalScore;
        document.getElementById("geuNum").innerHTML = "Guessed Numbers: " + x;
    }

    
}
//#endregion

//#region arrays


 function  gameReset (){


} 





//#endregion



//document.getElementById("submitBtn").disabled = false;