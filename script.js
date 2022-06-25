// Assignment code here
var characterLenght = 8;
var choiceArr = [];

var specialCharacterArr = ['!','@','#','$','%','^','&','*','<','>','?',];
var upperCharacterArr = ['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lowerCharacterArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompt = getPrompts()
  if (correctPrompt) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = '';
  for (i=0; i < characterLenght; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
return password;
}

function getPrompts () {
  choiceArr = [];
characterLenght = parseInt(prompt('How many characters? Please choose from range of 8-128 characters'));

if(isNaN(characterLenght) || characterLenght < 8 || characterLenght > 128) {
  alert ('Please, type a number from 8-128');
  return false;
}
if(confirm("Include lowercase letters?")) {
  choiceArr=choiceArr.concat(lowerCharacterArr);
}
if(confirm("Include uppercase letters?")) {
  choiceArr=choiceArr.concat(upperCharacterArr);
}
if(confirm("Include special symbols?")) {
  choiceArr=choiceArr.concat(specialCharacterArr);
}
if(confirm("Include numbers?")) {
  choiceArr=choiceArr.concat(numberArr);
}
return true;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
