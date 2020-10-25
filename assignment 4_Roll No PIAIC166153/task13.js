var date = new Date();
document.write("Current Date : " + date +"<br>");

var theUnixTime = date.getTime();
document.write("Elapsed milliseconds since january 1, 1970 : " + theUnixTime + " <br>");
var minutesUnixTime = (theUnixTime/1000/60);
document.write("Elapsed minutes since january 1, 1970 : " + minutesUnixTime );