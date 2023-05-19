var name = document.getElementById("username").value;
 
var valid_username_regex = /^[A-Za-z]+$/;

   
    var password = document.getElementById("password").value;
    var valid_password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if(!(username.match(valid_username_regex)) || !(password.match(valid_password_regex))  ){
 
        if(!(username.match(valid_username_regex))){

         document.getElementById("username_error").style.visibility = "visible";
         document.getElementById("username").style.borderColor = "red";
          
       }else

         if(!(password.match(valid_password_regex))){

           document.getElementById("password_error").style.visibility = "visible";
           document.getElementById("password").style.borderColor = "red";
            
         }else{
  
           document.getElementById("password_error").style.visibility = "hidden";
           document.getElementById("password").style.borderColor = "black";
  
         }
       return false;


    }else{

       document.getElementById("username_error").style.visibility = "hidden";
       document.getElementById("username").style.borderColor = "black";
       document.getElementById("password_error").style.visibility = "hidden";
       document.getElementById("password").style.borderColor = "black";
       return true;

    }

