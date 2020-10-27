

var date = new Date();
document.write("Current date : " + date + "<br>");
var extractHour = date.getHours();
var hourset = date.setHours(extractHour-1);
document.write("One hour ago, it was " + date);









