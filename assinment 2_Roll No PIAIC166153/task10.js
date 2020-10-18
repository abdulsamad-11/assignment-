var password = "rameezkhan";
var userInput = prompt("Write a password");


if(userInput === ""){

    alert("Write a password");
}
else if(userInput !== password){

    document.write("Incorrect "+userInput);

}
else if(userInput === password){


    alert("correct Password")
}