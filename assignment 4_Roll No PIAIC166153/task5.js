var input = Number(prompt("Enter the number"));

if (input < 0){
    alert("It is not positive");
}

document.write("Number : " + input);

var roundAverage = Math.round(input);
document.write("<br>Round off value: " + roundAverage);

var roundFloor = Math.floor(input);
document.write("<br>Floor value: " + roundFloor);

var roundCeil = Math.ceil(input);
document.write("<br>Ceil value: " + roundCeil);





















