function addWeek (){
    var userInput = Number(prompt("Enter no of weeks for add in date"));
     var date = new Date();
     var dateGet = date.getDate();
     var weeksAd = dateGet + (userInput*7);
     var dateAdd = date.setDate(weeksAd);
     
    console.log(date);
}
addWeek();