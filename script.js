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
    
    if(upperChars.toLowerCase == "yes"){
        var upCase = "abcdefghijklmnopqrstuvwxyz";
    }
    else{
        upCase = "";
    }

    if (specialChars.toLowerCase == "yes"){
        var uniqueChars = "/!\'#\'$%&'()*+,-./:;<=>?@[\']\'^_`{|}~";
      }
    else{
        uniqueChars = "";
    }

    if (numericChars.toLowerCase == "yes"){
        var numberChars = "0123456789"; 
    }
    else{
        numberChars = "";
    }

    if(lowerChars.toLowerCase == "yes"){
        var lowCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    else{
         lowCase = "";
    }

    function passwordGenerator(num){
        var pasVal = "";
        var charSet = (upCase + lowCase + numberChars + uniqueChars);
        
        for(var i = 0, n = charSet.length; i < num; i++){
           pasVal += charSet.charAt(Math.floor(Math.random() * n));
           
        } 
        alert(pasVal);
    }



passwordGenerator(numPass);

