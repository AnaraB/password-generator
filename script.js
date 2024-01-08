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

//global variables 
let passwordLength = 0;

let lowerCase = " ";
let upperCase = " ";
let numNumber = " ";
let symbol = " ";

// Function to prompt user for password options
function getPasswordOptions() {

  //ask user about password length
    passwordLength = prompt("How many characters would you like your password to contain?");
   
    //password length is not valid (less than 8 or more than 128) otherwise choose password char options
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Please choose a number between 8 and 128");
    } else {
      lowerCase = confirm("If you wish your password contain Lowercase Letters press OK");
      upperCase = confirm("If you wish your password contain Uppercase Letters press OK");
      numNumber = confirm("If you wish your password contain Numeric Characters press OK");
      symbol = confirm("If you wish your password contain Special Characters press OK"); 
    
    
      //what if all password character options are pressed CANCEL 
      if ( !lowerCase && !upperCase && !numNumber && !symbol ) {
        alert("Sorry, password cannot be gererated. Choose at least one password option. ")
        
        // getPasswordOptions()  ///recursive call
      } 
    }
  }



//-----------------------------Function to generate password with user input---------------------------------//
let passwordNew = " ";

function generatePassword() {
  getPasswordOptions();

  //create set of all possible characters by joining required character options together
  var setOfChars = [];

  if (lowerCase) {
    setOfChars = setOfChars.concat(lowerCasedCharacters); 
  } 
  if (upperCase) {
    setOfChars = setOfChars.concat(upperCasedCharacters);
  } 
  if (numNumber) {
    setOfChars = setOfChars.concat(numericCharacters);
  } 
  if (symbol) {
    setOfChars = setOfChars.concat(specialCharacters);
  } 


  // generate password based on the password length required by the user's input
  while(passwordNew.length < passwordLength ){
    passwordNew += setOfChars[Math.floor(Math.random() * setOfChars.length)];
    }
    return passwordNew;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  setTimeout(function() {
    passwordText.value = '';
  }, 5000); // Clear the password after 5 seconds
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);