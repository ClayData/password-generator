
var passLength = prompt("Choose a password length between 8 - 128 characters");
    if (passLength >= 8 & passLength <= 128){
    }
    else{
        alert("Must be between 8 - 128 characters, reload page")
    }

 var numPass = parseInt(passLength);   

var specialChars = prompt("Would you like special characters in your password, Yes or No?");
    
var numericChars = prompt("Would you like numeric characters in your password, Yes or No?");
  
var lowerChars = prompt("Would you like lowercase characters in your password, Yes or No?"); 

var upperChars = prompt("Would you like uppercase characters in your password, Yes or No?");


    
    function passwordGenerator(up, low, unique, numeral, pass){
        var upCase = "";
        var uniqueChars = "";
        var numberChars = "";
        var lowCase = "";
        

        if(up.toLowerCase() == "yes"){
            upCase += "abcdefghijklmnopqrstuvwxyz";
        }
        if(unique.toLowerCase() == "yes"){
            uniqueChars += "/!\'#\'$%&'()*+,-./:;<=>?@[\']\'^_`{|}~";
        }
        if(numeral.toLowerCase() == "yes"){
            numberChars += "0123456789"; 
        }
        if(low.toLowerCase() == "yes"){
            lowCase += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        
        var pasVal = "";
        charSet = (upCase + lowCase + numberChars + uniqueChars)
        
        for(var i = 0, n = charSet.length; i < pass; i++){
           pasVal += charSet.charAt(Math.floor(Math.random() * n));
           
        } 
        alert(pasVal);
    }


passwordGenerator(upperChars, lowerChars, specialChars, numericChars, numPass);




