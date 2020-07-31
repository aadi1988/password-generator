// Assignment code here
var random_gen = function(start,end,str1,password){
  for (var i=start; i<end; i++){
    var rand_num = Number (Math.random() * str1.length);
    password[i] = str1.charAt(rand_num);
    }
  return password;
}


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
  if (arr.length == 0) {
       window.prompt("Choose atleast one character type");
  }
       

  var ch_lower = "abcdefghijklmnopqrstuvwxyz";
  var ch_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var special = "~!@#$%^&*()";
  var password = [];
  var start;
  var end;
  for (var i=0; i< arr.length; i++){
       switch(arr[i]){
           case "lowercase":
                start = 0;
                end = Number(Math.floor(password_length/arr.length));
                str1 = ch_lower;
                password = random_gen(start,end,str1,password);
                console.log("lowercase");
                
                break;
           case "uppercase":
                start = password.length;
                end = start + Number(Math.floor(password_length/arr.length));
                str1 = ch_upper;
                password = random_gen(start,end,str1,password);
                console.log("uppercase");
                break;
           case "numeric":
                start = password.length;
                end = start + Number(Math.floor(password_length/arr.length));
                str1 = num;
                password = random_gen(start,end,str1,password);
                console.log("numeric");
                break;
           case "special characters":
                start = password.length;
                end = start + Number(Math.floor(password_length/arr.length));
                str1 = special;
                password = random_gen(start,end,str1,password);
                console.log("special");
                break;
           
       }   
  }
  
  window.alert(password);
  if (password.lenth != password_length){
        
        start = password.length;
        end = start + (password_length - start);
        console.log(end);
        str1 = ch_lower;
        password = random_gen(start,end,str1,password);
  }
  window.alert(password);
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
