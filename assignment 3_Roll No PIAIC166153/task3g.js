var colorNames = ["red","white","black","brown","grey","yellow","pink","orange","blue","green"];
var input1 = prompt("How many color he/she wants to delete ");
var input2 = prompt("and which index you want to delete");
colorNames.splice(input2,input1);
console.log(colorNames);

