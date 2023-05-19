// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  var numb = ["1","2","3","4","5","6","7","8","9","0"]
  var char = ["!","@","#","$","%","^","&","*","?",".",";",":","/","_","-","+"]
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

  var pwLength = window.prompt("Enter Number of desired characters (8-128)");
    if (
      (pwLength < 8) ||
      (pwLength > 128)
    ){
      return;
    }
  
  var pwLow = window.confirm("Do you want your password to include lowercase letters?");
  var pwCap = window.confirm("Do you want your password to include Capital letters?");
  var pwNumb = window.confirm("Do you want your password to include numbers?");
  var pwChar = window.confirm("Do you want your password to include characters?");

  var passwordCharacters = ""
    
  if (pwLow) {
    passwordCharacters = passwordCharacters.concat(lowercase);
  }

  if (pwCap) {
    passwordCharacters = passwordCharacters.concat(uppercase);
  }

  if (pwNumb) {
    passwordCharacters = passwordCharacters.concat(numb);
  }
      
  if (pwChar) {
    passwordCharacters = passwordCharacters.concat(char);
  }

    console.log(passwordCharacters)

  var randomPassword = ""
      
  for (var i = 0; i < pwLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
    return randomPassword;

  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
