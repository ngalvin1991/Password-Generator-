var charArr = [];

//Included the variables below to state the minimum and maximum characters required. 
var minPasswordLength = 10
var maxPasswordLength = 64


// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B','C', 'D', 'E','F','G', 'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// Assignment Code: 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Write password to the #password input
function writePassword() {
  var mainPrompts = userPrompts(); // this will return true or false.
  var passwordText = document.querySelector("#password");

  if (userPrompts) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passWTest.value = "";
  }
  
}

//This section asks for the users input, what type of characters they would like to use. 
function generatePassword() {
  var userPassword = "";
// Function for getting a random element from an array
  for (var i = 0; i < minPasswordLength; i++) {
    var randomPass = Math.floor(Math.random() * charArr.length);
    userPassword = userPassword + charArr[randomPass];
 }
 return userPassword;

}
   
function userPrompts (){
  charArr = [];

  minPasswordLength = parseInt(prompt("Let's get you a new password! Choose between 10 & 64 characters :) "));

  if (isNaN(minPasswordLength) || minPasswordLength < 10 || minPasswordLength > 64){
    alert("Please use numbers between 10 & 64, try again!");
    return false;
  }

  if (confirm("Do you want your password to contain numbers?")); {
    charArr = charArr.concat(numericCharacters);
  }

  if (confirm("Do you want your password to contain special characters?")); {
    charArr = charArr.concat(specialCharacters);
  }

  if (confirm("Do you want your password to contain uppercased characters?")); {
    charArr = charArr.concat(upperCasedCharacters); 
  }

  if (confirm("Do you want your password to contain lowercased characters?")); {
    charArr = charArr.concat(lowerCasedCharacters);
   
  }
  return true;
}


  