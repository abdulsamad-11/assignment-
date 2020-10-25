var age = Number(prompt("Enter your age"));
var date = new Date();
var extractYear = date.getFullYear();
var birthYear = (extractYear-age);

console.log(birthYear);