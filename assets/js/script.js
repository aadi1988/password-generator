var ch_lower = "abcdefghijklmnopqrstuvwxyz";
var ch_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "~!@#$%^&*()";

var start;
var end;
var str1;
// Random password generator
var random_gen = function(start,end,str1,password){
  for (var i=start; i<end; i++){
    var rand_num = Number (Math.random() * str1.length);
    password[i] = str1.charAt(rand_num);
    }
  return password;
}

//Pick a random option to generate the rest of the password if password length is not the same as required password length 
var password_randomizer = function(password,password_length,arr){
  if (password.lenth != password_length){
    
    var rand_ind = Math.floor(Math.random()*arr.length);
    str1 = arr[rand_ind];
    password = random_gen(password.length,password_length,str1,password);
  }
  //randomize the password once all options given by the user have been used.
  for (let i=password.length-1;i>0;i--){
    
    let letter = Math.floor(Math.random() * i);
    var temp;
    temp = password[i];
    password[i] = password[letter];
    password[letter] = temp;
    }
    
    return password;
}


//get options for the character types from the user.
var getinput = function(input,arr,input_str){
    var prompt_str  = "Choose Yes if " + input_str + " characters should be included, No if not:"
    input = window.prompt(prompt_str);
    if (input.toLowerCase() == "yes"){   
        arr.push(input_str);        
    }
    else if(input.toLowerCase() != "yes" && input.toLowerCase() != "no"){
      window.alert("Please enter a valid value");
      getinput(input,arr,input_str);
    }
    return arr;
}

//calling function to get input from the user to get the character types
var call_getinput = function(){
  var arr = [];
  var input;
  arr = getinput(input,arr,"lowercase");
  arr = getinput(input,arr,"uppercase");
  arr = getinput(input,arr,"numeric");
  arr = getinput(input,arr,"special characters");
  return arr;
}


//Create an initial password from the user given options.
var password_gen = function(arr,len,password){
    for (var j=0; j<arr.length;j++){
       switch(arr[j]){
           case "lowercase":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = ch_lower;
                password = random_gen(start,end,str1,password);             
                break;
           case "uppercase":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = ch_upper;
                password = random_gen(start,end,str1,password);            
                break;
           case "numeric":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = num;
                password = random_gen(start,end,str1,password);        
                break;
           case "special characters":
                start = password.length;
                end = start + Number(Math.floor(len/arr.length));
                str1 = special;
                password = random_gen(start,end,str1,password);             
                break;
        }         
    }  
  return password;
}

//Main function to generate thee password which calls all other functions.
var generatePassword = function(){
  var password = [];
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
  password = password_gen(arr,password_length,password);
  password = password_randomizer(password,password_length,arr);
  return password.join("");
  
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