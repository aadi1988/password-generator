// Assignment code here
var generatePassword = function(){
   var password_length = window.prompt("What is the password length: Choose a value between 8 and 128");
   if (password_length < 8 || password_length > 128 || password_length == null || password_length == "" ){
          window.prompt("Invalid password, Please enter password length again");
          generatePassword();
   } 
   var arr = [];
   var lowercase = window.prompt("Choose Yes if lowercase characters should be included, No if not:");
   if (lowercase == "Yes"){
       arr.push("lowercase");
   }
   var uppercase = window.prompt("Choose Yes if uppercase characters should be included, No if not");
   if (uppercase == "Yes"){
       arr.push("uppercase");
   }
   var numeric = window.prompt("Choose Yes if numbers should be included, No if not");
   if (numeric == "Yes"){
       arr.push("numeric");
   }

   var special_char = window.prompt("Choose Yes if special characters should be included, No if not");
   if (special_char == "Yes"){
       arr.push("special characters");
   }

  window.alert(arr);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
