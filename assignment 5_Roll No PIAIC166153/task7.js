function checkWeekend(){
var userInput = new Date(prompt("Enter Date"));
var dayGet = userInput.getDay();
var dayLeft = (6 - dayGet);
console.log(dayGet);
if (dayGet >= 6 && dayGet <= 7){
    console.log("Its, weekend");
}
else{
    console.log("Sorry! wait for " + dayLeft + " more days:");

}

}
checkWeekend();