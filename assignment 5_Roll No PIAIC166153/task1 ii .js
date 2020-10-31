
//2nd number factorial
var num = 5;
function factorialize(num) {
if (num < 0) 
return -1;
else if (num == 0) 
return 1;
else {
return (num * factorialize(num - 1));
}
}

console.log("factorial (" +num+ ")--------> " +factorialize(num));