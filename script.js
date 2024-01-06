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


//ask user about password length and password option 
// Function to prompt user for password options

//global variables 
let passwordLength = 0;

let lowerCase = " ";
let upperCase = " ";
let numNumber = " ";
let symbol = " ";


function getPasswordOptions() {
  passwordLength = prompt("How many characters would you like your password to contain?");
 
  //password length is not valid (less than 8 or more than 128)
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please choose a number between 8 and 128");
  } 
  // passwordLength;
  //console.log(passwordLength);

  lowerCase = confirm("If you wish your password contain Lowercase Letters press OK");
  upperCase = confirm("If you wish your password contain Uppercase Letters press OK");
  numNumber = confirm("If you wish your password contain Numeric Characters press OK");
  symbol = confirm("If you wish your password contain Special Characters press OK"); 


  //all password options pressed CANCEL == false  
  if ( lowerCase && upperCase && numNumber && symbol == false) {
    console.log("Sorry, password cannot be gererated. You must select password options. ")
  } 

}

console.log(passwordLength);


// Function for getting a random element from an array
// use random index and based on that choose one element and return it 
function getRandom(arr) {
  // Get the length of the array
  const length = arr.length;

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * length);

  // Access the element at the random index
  const randomElement = arr[randomIndex];

  // Return the random element
  return randomElement;

}

 //generate random password based on what character types user chose and the number of characters
 
 if (lowerCase) {
    lowerCase = getRandom(lowerCasedCharacters);
  } 
 if (upperCase) {
    upperCase =  getRandom(upperCasedCharacters);
  } 
 if (numericCharacters) {
    numericCharacters = getRandom(numericCharacters);
  } 
 if (symbol) {
    symbol = getRandom(specialCharacters);
  } 

 
  const passwordGetRandom = symbol + upperCase + lowerCase + numericCharacters 

  //console.log(passwordGetRandom);

//-----------------------------Function to generate password with user input---------------------------------//
let password = " ";

function generatePassword() {

console.log(passwordGetRandom.length);
// generate password length to match the length required by the user's input
 while (passwordLength > passwordGetRandom.length){
    password += passwordGetRandom[Math.floor(Math.random() * passwordGetRandom.length)];
 }
 console.log(password);
}

//call functions
getPasswordOptions();
//generatePassword();

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