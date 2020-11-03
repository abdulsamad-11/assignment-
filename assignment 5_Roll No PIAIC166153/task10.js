// Count vovels in string

function countVovel (){
    var userInput = prompt("Enter characters");
    var strLower = userInput.toLowerCase();
    var str = strLower.toString();
    var eachSpace = str.split("").join();
    var totalCountVovels = eachSpace.match(/[aeiou]/g).length;
    
    console.log(totalCountVovels);
}
countVovel();
