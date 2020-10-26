    //1st number
    var num = 8;
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

//2nd number
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

//3rd number

var num = 9;
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

