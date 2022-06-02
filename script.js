// Assignment Code
function generatePassword(lower, upper, number, special, passLength) {
  var length = passLength,
      lowerChar = "abcdefghijklmnopqrstuvwxyz",
      upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numberChar = "0123456789",
      specialChar = "!@#$*",
      charset = "",
      retVal = "";
  if(lower){
      charset = charset + lowerChar;
  }
  if( upper){
    charset = charset + upperChar;
  }
  if( number){
    charset = charset + numberChar;
  }
  if(special){
    charset = charset + specialChar;
  }
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = document.getElementById("lenght").value;
  var lower = document.querySelector('[name="lower"]:checked');
  var upper = document.querySelector('[name="upper"]:checked');
  var number = document.querySelector('[name="numbers"]:checked');
  var special = document.querySelector('[name="special"]:checked');
  var password = generatePassword(lower, upper, number, special, passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button
