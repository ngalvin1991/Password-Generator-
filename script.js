// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var allChars = specialCharacters + numericCharacters + lowerCasedCharacters + upperCasedCharacters;

//Included the variables below to state the minimum and maximum characters required. 
var minPasswordLength = 10;
var maxPasswordLength = 64;
var includeNum;
var includeChar;
var includeUpper;
var includeLower;
var decision; 

// REMEMBER NO FUNCTION WILL RUN WITHOUT BEING CALLED!!!! MAKE SURE THIS IS INCLUDED AT END OF CODE.

// Function to prompt user for password options
//This section asks for the users input, what type of characters they would like to use. 
function getPasswordOptions() {
   newPass = prompt("Let's get you a new password!");
  if (!newpass) {
    alert("You need to input something! Please try again!");
  } else if (newPass < minPasswordLength || newPass > maxPasswordLength ){
    newPass = parseInt(prompt("Please choose a password between 10 & 64 characters :)"));
  } else {
    includeNum = confirm("Do you want your password to contain numbers?");
    includeChar = confirm("Do you want your password to contain special characters?");
    includeUpper = confirm("Do you want your password to contain Upper case letters?");
    includeLower = confirm("Do you want your password to contain Lower case letters?")
  };


  //if no options have been chosen:
if (includeNum && includeChar && includeLower && includeUpper) {
  decision = alert("Uh oh, please choose something!");
}

//if all options are chosen. 
else if (includeNum && includeChar && includeUpper && includeLower) {
  decision = numericCharacters.concat(specialCharacters, upperCasedCharacters, lowerCasedCharacters);
}

//below are the else if's, if 3 options are chonse.

else if (includeNum && includeChar && includeUpper) {
  decision = numericCharacters.concat(specialCharacters, lowerCasedCharacters);
}

else if (includeNum && includeChar && includeLower) {
  decision = numericCharacters.concat(specialCharacters, upperCasedCharacters);
}

else if (includeChar && includeUpper && includeLower) {
  decision = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
}

// else if's, if only 2 options are chosen. 

//includes number and special character.
else if (includeNum && includeChar) {
  decision = numericCharacters.concat(specialCharacters);
}

//includes number and uppercase character
else if (includeNum && includeUpper) {
  decision = numericCharacters.concat(upperCasedCharacters);
}

//includes number and lowercase character 
else if (includeNum && includeLower) {
  decision = numericCharacters.concat(upperCasedCharacters);
}

//includes special case character and number. 
else if (includeChar && includeNum) {
  decision = specialCharacters.concat(numericCharacters);
}

//includes special character and uppercase character.
else if (includeChar && includeUpper) {
  decision = specialCharacters.concat(upperCasedCharacters);
}

//includes special character and lowercase character
else if (includeChar && includeLower) {
  decision = specialCharacters.concat(lowerCasedCharacters);
}

//includes upper and lowercase characters.
else if (includeUpper && includeLower) {
  decision = upperCasedCharacters.concat(lowerCasedCharacters);
}

//Else if's if only 1 option is chosen:

else if (includeNum) {
  decision = numericCharacters;
}

else if (includeChar) {
  decision = specialCharacters;
}

else if (includeUpper) {
  decision = upperCasedCharacters;
}

else if (includeLower) {
  decision = lowerCasedCharacters;
}
}


var userPassword = [];
// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < newPass; i++) {
    var includedPass = included[Math.floor(Math.random() * included.length)];
    userPassword.push(includedPass);
 }

 
}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


