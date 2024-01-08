// Array of special characters
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of random characters
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Password options
// // Password options pop-up
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

// Returns a random from the arrays
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Ensure random password
function generatePassword() {
  var options = PasswordOptions(); // Corrected function name

  if (!options) return null;

  var possibleCharacters = [];
  var guaranteedCharacters = [];

  // Generate random special characters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Generate random numeric characters
  if (options.hasNumericCharacters) { // Corrected property name
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Generate lowercase characters
  if (options.hasLowerCasedCharacters) { // Corrected property name
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Generate uppercase characters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  var result = [];

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

// Generates password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Displays generated password
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);