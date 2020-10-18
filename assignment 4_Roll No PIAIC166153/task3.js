var input = (prompt("Enter password"));

if (input[0] >= 0 && input[0] <=9){
    console.log("It should not start with a number");
}
if (input.length <= 7){
    console.log("It must at least 8 characters long");
}
if (input.search(/[a-z]/i) < 0) {
     console.log("Enter a valid password. For character codes of a-z,A-Z & 0-9");
}
if (input.search(/[0-9]/) < 0) {
   console.log("Enter a valid password. For character codes of a-z,A-Z & 0-9");
}

