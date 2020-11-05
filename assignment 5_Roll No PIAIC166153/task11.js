
var userInput = prompt("Enter character for checking vovels");
var isVovel = userInput.toUpperCase();

function cheking (){
 switch (isVovel) {
    case "A":
        console.log("true: its vovel;");
        break;
    case "E":
        console.log("true: its vovel;");
        break;
    case "I":
        console.log("true: its vovel;");
        break;
    case "O":
        console.log("true: its vovel;");
        break;
    case "U":
        console.log("true: its vovel;");
        break;
        
    default:
        console.log("false! its not vovel;");
        break;
}
}
cheking();




// function isVovel (){
//     var userInput = prompt("Enter characters");
//     var strLower = userInput.toLowerCase();
//     var str = strLower.toString();
//     var eachSpace = str.split("").join();
//     var chkVovelA = eachSpace.m 
//     console.log();

// }
// isVovel();