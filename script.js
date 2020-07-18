// Arrays for each of the confirmation options.
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define the generatePassword function
function generatePassword() {

  //Initialize an empty array for the newPassword being generated.
  var newPassword = [];

  //Ask the user for the password length.
  var passwordLength = prompt("How many characters are needed for the password? (Min 8, Max 128)");

  //Validates that the user has chosen a passwordLength within the allowable range.
  while (passwordLength < 8 || passwordLength > 128) {

    //Let the user know their submission was outside of the acceptable range.
    alert("Character length must be between 8 and 128.");

    //Prompt them to enter a new submission for the character length
    passwordLength = prompt("How many characters are needed for the password? (Min 8, Max 128)");
 
  }
  
  //Initialize an empty array for the possible character arrays based on the user's response.
  var characterTypeArray = [];

  //Confirm which characterTypes will be needed in the password.
  var confirmLowerCase = confirm("Do you need at least one lower case character?");
  if (confirmLowerCase) {
      //Add lowercaseLetters array to the characterTypeArray
      characterTypeArray.push(lowercaseLetters);
  }
  var confirmUpperCase = confirm("Do you need at least one upper case character?");
  if (confirmUpperCase) {
      //Add uppercaseLetters array to the characterTypeArray
      characterTypeArray.push(uppercaseLetters);
  }
  var confirmNumericals = confirm("Do you need at least one numerical character?");
  if (confirmNumericals) {
      //Add numericals array to the characterTypeArray
      characterTypeArray.push(numericals);
  }
  var confirmSpecial = confirm("Do you need at least one special character?");
  if (confirmSpecial) {
      //Add specialCharacters array to the characterTypeArray
      characterTypeArray.push(specialCharacters);
  }

  //Now characterTypeArray only includes the arrays that the user has selected from the confirms.

  //Loop once for the generation of each character up to the exact character length chosen by the user.
  for (var i = 0 ; i < passwordLength; i++) {

  //Selects one random characterTypeArray from a list of the arrays chosen by the user.
  var randomCharacterTypeArray = characterTypeArray[Math.floor(Math.random() * characterTypeArray.length)];

  //Selects one random character from the randomly chosen array.
  var randomCharacter = randomCharacterTypeArray[Math.floor(Math.random() * randomCharacterTypeArray.length)];

  //Push random character to the end of the newPassword array.
  newPassword.push(randomCharacter);
  //Repeat this loop until the length of the newPassword array matches the user's specifications stored in passwordLength.
  }

  //THE CODE BELOW WAS AN ATTEMPT TO TRY TO MAKE SURE THAT AT LEAST ONE CHARACTER FROM EACH ARRAY WITHIN characterTypeArray WAS SELECTED.
  //UNFORTUNATELY I COULDN"T FIGURE THIS OUT BUT THE generatePassword() FUNCTION SEEMS TO WORK ANYWAY.

  //checkArrays will store the checks for whether each array within characterTypeArray were used.
  var checkArrays = [];

  //Check to see if all arrays within characterTypeArray had at least one character added to the newPassword array.
  for (var j = 0; j < characterTypeArray.length; j++) {
    var checkArrays = findCommonElements(newPassword,characterTypeArray[j]);
  }

  //if (checkArrays.includes(false)) {

  }


//Returns whether any of the elements within arr1 matches any elements in arr2.
function findCommonElements(arr1, arr2) { 
  return arr1.some(item => arr2.includes(item)) 
} 


//Convert the newPassword array into a text string to assign to var password and return it.
  var password = newPassword.join().replace(/,/g,"");

  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
