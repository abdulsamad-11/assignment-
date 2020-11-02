
// calculate days months year of your age

function ageCalculate (){
    var birthDate = new Date(prompt("Enter your date of birth"));
    var date = new Date();
    var daysBirth = (date - birthDate)/1000/60/60/24;
    var yearsBirth = daysBirth/365;
    var yearsBirthRound = Math.floor(yearsBirth);
    var baqya = daysBirth-(yearsBirthRound*365);
    var monthsBirth = baqya/30;
    var monthsBirthRound = Math.floor(monthsBirth);
    var baqyaDays = baqya-(monthsBirthRound*30);
    var baqyaDaysRound = Math.floor(baqyaDays);
    console.log("You are " + yearsBirthRound + " years, " + monthsBirthRound + " months and " + baqyaDaysRound + " days old");
}
ageCalculate();




















