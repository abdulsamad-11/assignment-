



    var userInput = prompt("Enter number");
    var numCount = ["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine "];
    var elevn = ["ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","ninteen "];
    var numTen = ["twenty ","thirty ","fourty ","fifty ","sixty ","seventy ","eighty ","ninty "];
    var numHundred = ["Hundred "];
    if (userInput < 10){
        console.log(numCount[userInput[0]]);
    }
    if(userInput >= 10 && userInput < 20){
        console.log(elevn[userInput[1]]);
    }
    if(userInput >= 20 &&   userInput < 30){
    console.log(numTen[0] + numCount[userInput[1]]);
    }
    if (userInput >= 30 && userInput < 40){
        console.log(numTen[1]+numCount[userInput[1]]);
    }
    if (userInput >= 40 && userInput < 50){
        console.log(numTen[2]+numCount[userInput[1]]);
    }
    if (userInput >= 50 && userInput < 60){
        console.log(numTen[3]+numCount[userInput[1]]);
    }
    if (userInput >= 60 && userInput < 70){
        console.log(numTen[4]+numCount[userInput[1]]);
    }
    if (userInput >= 70 && userInput < 80){
        console.log(numTen[5]+numCount[userInput[1]]);
    }
    if (userInput >= 80 && userInput < 90){
        console.log(numTen[6]+numCount[userInput[1]]);
    }
    if (userInput >= 90 && userInput < 100){
        console.log(numTen[7]+numCount[userInput[1]]);
    }
    if (userInput == 100){
        console.log(numHundred[0]);
    }
    if (userInput > 100 && userInput < 110){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numCount[userInput[2]]));
    }
    if (userInput >= 110 && userInput < 120){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (elevn[userInput[2]]));
    }
    if (userInput >= 120 && userInput < 130){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[0]) + (numCount[userInput[2]]));
    }
    if (userInput >= 130 && userInput < 140){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[1]) + (numCount[userInput[2]]));
    }
    if (userInput >= 140 && userInput < 150){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[2]) + (numCount[userInput[2]]));
    }
    if (userInput >= 150 && userInput < 160){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[3]) + (numCount[userInput[2]]));
    }
    if (userInput >= 160 && userInput < 170){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[4]) + (numCount[userInput[2]]));
    }
    if (userInput >= 170 && userInput < 180){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[5]) + (numCount[userInput[2]]));
    }
    if (userInput >= 180 && userInput < 190){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[6]) + (numCount[userInput[2]]));
    }
    if (userInput >= 190 && userInput < 200){
        console.log((numCount[userInput[0]]) + (numHundred[0]) + (numTen[7]) + (numCount[userInput[2]]));
    }
    

















