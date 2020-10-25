var date = new Date();
document.write(date + "<br>");
var extractHour = date.getHours();
document.write(extractHour + "<br>");
var hourset = date.setHours(extractHour-1);
document.write(date);
