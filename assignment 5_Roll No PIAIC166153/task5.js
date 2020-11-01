


function countNotes (){
    var amountWithdrawn =Number(prompt("Enter amount to withdrawn"));
    var amountarr = amountWithdrawn.toString();
    var amountSplit = amountarr.split("");
    var amountLen = amountarr.length;
    var amountRoundind = (amountarr.lastIndexOf("")-1);
    var amountRoundchar= amountarr.charAt(amountRoundind);
    var amountFinalRound = amountWithdrawn-amountRoundchar;


    if (amountFinalRound <= 49){
        console.log(amountarr[0] + " ten notes");
    }


    if (amountFinalRound >= 50 && amountFinalRound <= 99){
        var sourt = (amountFinalRound-50);
        var sourt2 = (sourt/10);
        console.log("one fifty note " + sourt2 + " ten note");
    }


    else (amountFinalRound >= 100)
        var amountFindHundred = amountFinalRound/100;
        var amountTotalHundred = Math.floor(amountFindHundred);
        var amountBaqya = amountFinalRound-(amountTotalHundred*100);
        
        if (amountBaqya >= 50 && amountBaqya <= 99){
            var baqayamore = (amountBaqya-50)/10;
            console.log("You will have " + amountTotalHundred + " hundred note one fifty note " + baqayamore + " ten note ");
        }
        
        if (amountBaqya <= 49){
            var baqyaTen = amountBaqya/10;
        console.log("You will have " + amountTotalHundred + " hundred note " + baqyaTen + " ten note");
        }
}
countNotes();




