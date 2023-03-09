// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() { 
  // Call the function to ask user prompts
  var password = generatePassword(); 
  
  // Function that will ask the user prompts
  function generatePassword () {
    
    // prompt series + criteria
    var lengthPrompt = prompt("Choose a length for the password, between 8 and 128 characters.");
    console.log(lengthPrompt);

    // character prompt
    var characterPrompt = alert("Select which characters you would like to be a part of the password.");
    console.log(characterPrompt);
    
    var lowercase = prompt("Would you like lowercase characters? Please type yes or no.");
    lowercase = lowercase.toUpperCase();
    // validate input 
    while ((lowercase !== "YES") && (lowercase !== "NO")) {
      lowercase = prompt("Please type yes or no.");
      lowercase = lowercase.toUpperCase();
    }
    console.log(lowercase);

    var uppercase = prompt("Would you like uppercase characters? Please type yes or no.");
    uppercase = uppercase.toUpperCase();
    // validate input 
    while ((uppercase !== "YES") && (uppercase !== "NO")) {
      uppercase = prompt("Please type yes or no.");
      uppercase = uppercase.toUpperCase();
    }
    console.log(uppercase);

    var numeric = prompt("Would you like numeric characters? Please type yes or no.");
    numeric = numeric.toUpperCase();
    // validate input 
    while ((numeric !== "YES") && (numeric !== "NO")) {
      numeric = prompt("Please type yes or no.");
      numeric = numeric.toUpperCase();
    }
    console.log(numeric);

    var special = prompt("Would you like special characters? Please type yes or no.");
    special = special.toUpperCase();
    // validate input 
    while ((special !== "YES") && (special !== "NO")) {
      special = prompt("Please type yes or no.");
      special = special.toUpperCase();
    }
    console.log(special);

    
  }
  // Get references to the #password element
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

  // character arrays (hardcoded for testing)
  var lowercaseChar = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
  var uppercaseChar = toUpperCase(lowercaseChar);
  var numericChar = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ['~','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']'];
  // incomplete list of spacial characters

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
