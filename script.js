//added variables for the code below
var minPasswordLength = "";
var includeNum;
var includeChar;
var includeUpper;
var includeLower;

//Included the variables below to state the minimum and maximum characters required. 
var minPasswordLength = "";



// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];


//This section asks for the users input, what type of characters they would like to use. 
function generatePassword() {

  var minPasswordLength = parseInt(prompt("Let's get you a new password! Choose between 10 & 64 characters :) "));

  //checks to see if password is below or above min or max lengths
  while (minPasswordLength <= 10 || minPasswordLength >= 64) {
    alert("Please use numbers between 10 & 64, try again!");
    var minPasswordLength = (prompt("How many characters would you like in your password?"));
  }

  //Confirmations of what the users wants to input
  var includeNum = confirm("Would you like to include numbers?");
  var includeChar = confirm("Would you like to include special characters?");
  var includeUpper = confirm("Would you like to include uppercased characters?");
  var includeLower = confirm("Would you like to include lowercased characters?");

  while (includeNum === false && includeChar === false && includeUpper === false && includeLower === false) {
    alert("You must select at least one option!");
  }

  //this grabs the characters from the character variables at the top of the page.
  var pwCharacters = []

  if (includeNum) {
    pwCharacters = pwCharacters.concat(numericCharacters);
  }

  if (includeChar) {
    pwCharacters = pwCharacters.concat(specialCharacters);
  }

  if (includeUpper) {
    pwCharacters = pwCharacters.concat(upperCasedCharacters);
  }

  if (includeLower) {
    pwCharacters = pwCharacters.concat(lowerCasedCharacters);
  }


  // Function for getting a random element from an array
  var userPassword = "";
  for (var i = 0; i < minPasswordLength; i++) {
    var userPassword = userPassword + pwCharacters[Math.floor(Math.random() * pwCharacters.length)];
  }
  return userPassword;
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword(); // 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//this prompts the user to input there choices once the generate button has been clicked. 
document.querySelector("#generate").addEventListener("click", writePassword);

