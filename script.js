var passLength = prompt("Choose a password length between 8 - 128 characters");
    if (passLength >= 8 & passLength <= 128){
    }
    else{
        alert("Must be between 8 - 128 characters, reload page")
    }


var specialChars = prompt("Would you like special characters in your password, Yes or No?");
    if (specialChars.toLowerCase == yes){
      var uniqueChars = "/!\'#\'$%&'()*+,-./:;<=>?@[\']\'^_`{|}~";
    }

var numericChars = prompt("Would you like numeric characters in your password, Yes or No?");
    if (numericChars.toLowerCase == yes){
        var numberChars = "0123456789"; 

    }
var lowerChars = prompt("Would you like lowercase characters in your password, Yes or No?");
    if(lowerChars.toLowerCase == yes){
        var lowCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
var upperChars = prompt("Would you like uppercase characters in your password, Yes or No?");
    if(upperChars.toLowerCase == yes){
        var upCase = "abcdefghijklmnopqrstuvwxyz";
    }

function passwordGenerator(passLength){

}