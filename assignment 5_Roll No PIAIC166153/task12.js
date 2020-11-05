var userInput = Number(prompt("Enter number 1-10 to guess the secret number"));

var num = Math.random();
var num100 = (num*10)+1;
var secNum = Math.floor(num100);
//var attemps = 3;
var doContinue = true;
var i = 0;
while (doContinue) {
  for (var i=0; i<3; i++){
    if(userInput == secNum){
    alert("You are right, You won:");
    break;
    }else{
      userInput=Number(prompt("Incorrect,\n Please try again:"));
    }
  }
    
    var input = prompt("plz enter Y to play again or N to stop game");
    if (input.toLowerCase() !== "y"){
        doContinue = false;
    }
}




















