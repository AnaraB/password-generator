// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/'
  
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
  'i'

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
  'L'

];



//global variables 
let passwordLength = 0;

let lowerCase = " ";
let upperCase = " ";
let numNumber = " ";
let symbol = " ";

function selectPasswordOptions() {
  lowerCase = confirm("If you wish your password contain Lowercase Letters press OK");
  upperCase = confirm("If you wish your password contain Uppercase Letters press OK");
  numNumber = confirm("If you wish your password contain Numeric Characters press OK");
  symbol = confirm("If you wish your password contain Special Characters press OK"); 
}



// Function to prompt user for password options
function getPasswordOptions() {

  //ask user about password length and convert the repsopnse into int with parseInt
  passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
  
  //check whether is the number and is valid to be in the range between 8 and 128
  if (isNaN(passwordLength) || !(passwordLength >= 8 && passwordLength <= 128)) {
    alert("Please enter a valid number between 8 and 128");
    getPasswordOptions(); // Use recursion to prompt again
  } else {
    selectPasswordOptions();
  }
  
      //if all password character options are pressed CANCEL 
  if ( !lowerCase && !upperCase && !numNumber && !symbol ) {
      alert("Sorry, password cannot be gererated. Choose at least one password option. ")
      getPasswordOptions();
      
    } 
    }

//-----------------------------Function to generate password with user input---------------------------------//
let passwordNew;

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

passwordNew = "";

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
  passwordText.value = '';
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);