document.write(" Sort an array from smallest to largest value");
var array = [20,53,78,4,91,12];

 array.sort(function(a , b){
     return a-b;

 })
 document.write("<br> " + array);


