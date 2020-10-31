
//argument as value
function area (width,hight){
    area=width*hight,
    console.log("arguments as value " +area);
}
area(20,10);


//argument as variable


function area (width,hight){
    area=width*hight,
    console.log("arguments as variable " +area);
}
area(20,10);

const byVariable = area();
byVariable();




