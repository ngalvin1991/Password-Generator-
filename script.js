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

var minPasswordLength = 10;
var maxPasswordLength = 64;

// Function to prompt user for password options
//This section asks for the users input. 
function getPasswordOptions() {
  //  newPass = prompt("Let's get you a new password! Choose between 10 & 64 characters!");
  // if (!newpass) {
  //   alert("You need to input something!");
  // } else if (newPass < minPasswordLength || newPass > maxPasswordLength ){
  //   newPass = parseInt(prompt("Please choose a password between 10 & 64 characters"));
  // } else {
  //   includeNum = confirm("Do you want your password to contain numbers?");
  //   includeChar = confirm("Do you want your password to contain special characters?");
  //   includeUpper = confirm("Do you want your password to contain Upper case letters?");
  //   includeLower = confirm("Do you want your password to contain Lower case letters?")
  // };


}

// Function for getting a random element from an array
function getRandom(arr) {

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


// // Function to generate password with user input
// function generatePassword() {
//   alert("Called this function. Wheeee!!!");
//   return "This is a secret password. Whee."
// }

// Present a series of prompts for password criteria:

// Length of password:

// At least 10 characters but no more than 64.

// Character types:

// Lowercase

// Uppercase

// Numeric

// Special characters ($@%&*, etc.)

// Code should validate for each input and at least one character type should be selected.

// Once all prompts are answered, the password should be generated and displayed in an alert or written to the page.