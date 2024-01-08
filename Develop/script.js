// Special characters
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
  '.',
];

// Numeric characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase characters
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
  'z',
];

// Uppercase characters
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
  'Z',
];

// Password options pop-up
function PasswordOptions() {
  // Store password length
  var length = parseInt(
    prompt('How many characters would you like for your password?'),
    10
  );

  // Ensures that password length is a number.
  if (Number.isNaN(length)) {
    alert('Oops! Password length must be a number!');
    return null;
  }

  // Checks if password is at least 8 characters long. 
  if (length < 8) {
    alert('Sorry, password must be at least 8 characters');
    return null;
  }

  // Checks if password is less than 100 characters long.
  if (length > 128) {
    alert('Woah! Password must less than 129 characters');
    return null;
  }

  // Ensures special characters
  var hasSpecialCharacters = confirm(
    'Click OK for special characters.'
  );

  // Ensures numeric characters
  var hasNumericCharacters = confirm(
    'Click OK for numeric characters.'
  );

  // Ensures lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK for lowercase characters.'
  );

  // Ensures uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK for uppercase characters.'
  );

  // Checks if user does not include any types of characters
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Ooops, you must select at least one character criteria!');
    return null;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };

  return passwordOptions;
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
