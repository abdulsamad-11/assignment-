var input = (prompt("Enter email address"));

if (input.search(/[a-z]/i) < 0) {
    console.log("Enter character Email address.");
}


if (input.search(/[@]/i) < 0) {
     console.log("Enter a valid email address '@'?. ");
}


if (input.search(/[.]/i) < 0) {
    console.log("Enter a valid email address 'dott'?. ");
}

if (input.search(/[0-9]/) > 0) {
   console.log("Enter valid email address not digits.");
}

if (input.search(/[.]/i) < input.search(/[@]/i)) {
    console.log("dott before @ is invalid");
}
































