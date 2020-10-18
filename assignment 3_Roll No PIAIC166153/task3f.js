var colorNames = ["red","white","black","brown","grey","yellow","pink","orange","blue","green"];
var input1 = prompt("What color he/she wants to add ");
var input2 = prompt("and which index you want to add");
colorNames.splice(input2,0,input1);
console.log(colorNames);

