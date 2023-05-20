function validation(){

    var fname = document.getElementById("fname").value;
 
    var valid_fname_regex = /^[A-Za-z]+$/;

    var lname = document.getElementById("lname").value;
 
    var valid_lname_regex = /^[A-Za-z]+$/;
 
    var city = document.getElementById("city").value;

    var phone = document.getElementById("phone").value;

    var valid_phone_regex = /^[0-9]{9,10}$/;
   
 
       if(!(fname.match(valid_fname_regex)) || !(lname.match(valid_lname_regex)) || (city == "") || !(phone.match(valid_phone_regex)) || !(password.match(valid_password_regex)) || !(email.match(valid_email_regex)) ){
 
         if(!(fname.match(valid_fname_regex))){
 
          document.getElementById("fname_error").style.visibility = "visible";
          document.getElementById("fname").style.borderColor = "red";
           
        }else{
 
          document.getElementById("fname_error").style.visibility = "hidden";
          document.getElementById("fname").style.borderColor = "black";
 
        }

        if(!(fname.match(valid_fname_regex))){
 
            document.getElementById("lname_error").style.visibility = "visible";
            document.getElementById("lname").style.borderColor = "red";
             
          }else{
   
            document.getElementById("lname_error").style.visibility = "hidden";
            document.getElementById("lname").style.borderColor = "black";
   
          }
 
        if(city == ""){
 
          document.getElementById("city_error").style.visibility = "visible";
          document.getElementById("city").style.borderColor = "red";
           
        }else{
 
          document.getElementById("city_error").style.visibility = "hidden";
          document.getElementById("city").style.borderColor = "black";
 
        }
        
        if(!(phone.match(valid_phone_regex))){
 
            document.getElementById("phone_error").style.visibility = "visible";
            document.getElementById("phone").style.borderColor = "red";
             
          }else{
   
            document.getElementById("phone_error").style.visibility = "hidden";
            document.getElementById("phone").style.borderColor = "black";
   
          }
 
        return false;
 
 
     }else{
 
        document.getElementById("fname_error").style.visibility = "hidden";
        document.getElementById("fname").style.borderColor = "black";
        document.getElementById("lname_error").style.visibility = "hidden";
        document.getElementById("lname").style.borderColor = "black";
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city").style.borderColor = "black";
        document.getElementById("phone_error").style.visibility = "hidden";
        document.getElementById("phone").style.borderColor = "black";
        return true;
 
     }
 
 
    }