

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

function generatePassword(length, lower, upper, number, special){
  if (length < 8 || length > 128){
    alert('Error: Please enter a length between 8 and 128');
    return  password = '';
  }
  if (lower == false && upper == false && special == false && number == false){
    alert('Error: Please enter valid criteria');
    return  password = '';

  }
  var password = '';
  var charArray = [];
  if (lower == true){
    charArray = charArray.concat(lowerCasedCharacters);
  }
  if(upper == true){
    charArray = charArray.concat(upperCasedCharacters);
  }
  if(number == true){
    charArray = charArray.concat(numericCharacters)
  }
  if(special == true){
    charArray = charArray.concat(specialCharacters)
  }
  var passwordArray = [];
  for (var i = 0; i < length; i++){
    passwordArray = passwordArray.concat(charArray[Math.floor(Math.random() * charArray.length)]);
  }
  password = passwordArray.join('')
  return password;
}



function checkboxChecker(id){
  var checkBox = document.getElementById(id);
  if (checkBox.checked === true){
    var x = true;
  }else{
    var x = false;
  }
  return x
}

// Write password to the #password input
function writePassword() {
  var x = parseInt(document.getElementById("myNumber").value);

  var lowerBool = checkboxChecker("lower");
  var upperBool = checkboxChecker("upper");
  var numberBool = checkboxChecker("numbers");
  var specialBool = checkboxChecker("special");

  var password = generatePassword(x, lowerBool, upperBool, numberBool, specialBool);
  document.getElementById('password').value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
