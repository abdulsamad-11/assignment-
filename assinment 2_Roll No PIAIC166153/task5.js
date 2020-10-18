var input = Number(prompt("Guess the secret  number"));
var secretnumber = 7;
if (input === secretnumber){
    alert("Bingo! Correct answer");
} else{
if (input === ++secretnumber)
    alert("Close enough to correct answer");
}
