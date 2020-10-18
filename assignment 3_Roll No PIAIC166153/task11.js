var a = ["cake","apple pie","cookie","chipps","petties"];
var input = prompt("Wellcome to ABC Bakery.What do you want to order sir/ma'am?");
var found = false;
for (var i=0; i<a.length; i++){
    if (input == a[i]){
    alert(input + " is available at index " +(i+1)+ " in our Bakery");
    found = true;
    break;
}
}
if (!found){
alert("We are sorry. " +input+ " is not available in our Bakery");
}






