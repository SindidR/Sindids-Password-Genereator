// Assignment code here
function generatePassword() {
var numbers = "0123456789".split("");
var alphabetLower = "abcdefghijklmnopqrstuvwxyz".split("");
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specialChar = "!@#$%^&*()_-<>,.~\/?".split("");
var randomPassword = ""
var selected = ""

var passwordLength = parseInt(window.prompt("How many characters should your password be?"));
if (passwordLength >= 8 && passwordLength <=128) {
} else {
  alert("Error: make sure character length number is between 8-128!");
  return;
}

var number = confirm("Would you like Number Characters?")
if (number) {
  selected += numbers
}
var lower = confirm("Would you like Lowercase Characters?")
if (lower) {
  selected += alphabetLower
}
var upper = confirm("Would you like Uppercase Characters?")
if (upper) {
  selected += alphabetUpper
}
var special = confirm("Would you like Special Characters?")
if (special) {
  selected += specialChar
}

for(var i = 0; i <= passwordLength; i++) {
  randomPassword += selected[Math.floor(Math.random() * selected.length)]
}

return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
