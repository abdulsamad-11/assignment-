var submarks = Number(prompt("Marks obtain in tree subjects"));
var totalmarks = Number(prompt("Total marks"));
var percentage = (submarks*100/totalmarks);
document.write("<h1>MARKS SHEET: <br><h3>Total Marks :  " +totalmarks+ " <br> Marks Obtain : " +submarks+ "<br> percentage : " +percentage);
if (percentage >= 80){
    document.write("<br>Grade = A-one : <br> Remarks = Excellent :");
}
if (percentage >= 70 && percentage < 80){
    document.write("<br>Grade = A <br> Remarks = Good ");
}
if (percentage >= 60 && percentage < 70){
    document.write("<br>Grade = B <br> Remarks = You need to improve");
}
if (percentage < 60){
    document.write("<br>Grade = Fail <br> Remarks = Sorry");
}





