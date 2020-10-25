
var date = new Date(); 
var sepdate = date.getDate(); 
if (sepdate >= 1 && sepdate <=15){
    document.write("First fifteen days of the month");
}else{
    document.write("Last days of the month");
}
