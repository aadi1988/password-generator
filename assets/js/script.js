// Assignment code here
var random_gen = function(start,end,str1,password){
  for (var i=start; i<end; i++){
    var rand_num = Number (Math.random() * str1.length);
    password[i] = str1.charAt(rand_num);
    }
  return password;
}

var getinput = function(input,arr,input_str){
    var prompt_str  = "Choose Yes if " + input_str + " characters should be included, No if not:"
    input = window.prompt(prompt_str);
    if (input.toLowerCase() == "yes"){
        console.log(arr);
        console.log(input_str);
        arr.push(input_str);
        
        
    }
    else if(input.toLowerCase() != "yes" && input.toLowerCase() != "no"){
      console.log(input);
      window.alert("Please enter a valid value");
      getinput(input,arr,input_str);
    }
    
    return arr;
}

var call_getinput = function(){
  var arr = [];
  var input;
  arr = getinput(input,arr,"lowercase");
  arr = getinput(input,arr,"uppercase");
  arr = getinput(input,arr,"numeric");
  arr = getinput(input,arr,"special characters");
  return arr;
}

var password_gen = function(arr,len){
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
                end = Number(Math.floor(len/arr.length));
                str1 = ch_lower;
                password = random_gen(start,end,str1,password);
                console.log("lowercase");
                
                break;
           case "uppercase":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = ch_upper;
                password = random_gen(start,end,str1,password);
                console.log("uppercase");
                break;
           case "numeric":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = num;
                password = random_gen(start,end,str1,password);
                console.log("numeric");
                break;
           case "special characters":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = special;
                password = random_gen(start,end,str1,password);
                console.log("special");
                break;
           
       }   
  }
  return password;
}


var generatePassword = function(){
  var password_length = window.prompt("What is the password length: Choose a value between 8 and 128");
  if (password_length < 8 || password_length > 128 || password_length == null || password_length == "" ){
          window.prompt("Invalid password, Please enter password length again");
          generatePassword();
   } 
   
  var arr = call_getinput();
   
  if (arr.length == 0) {
       window.prompt("Choose atleast one character type");
       call_getinput();
   }
       
  var password = password_gen(arr,password_length);
  
  
  window.alert(password);
  var ch_lower = "abcdefghijklmnopqrstuvwxyz";
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
