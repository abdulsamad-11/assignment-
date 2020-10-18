var colorNames = ["red","white","black","brown","grey","yellow","pink","orange","blue","green"];
var input = prompt("What color he/she wants to add to the bigning");
var sortningIndex =  colorNames.indexOf(input);
colorNames.splice(sortningIndex,1);
colorNames.push(input);
console.log(colorNames);

