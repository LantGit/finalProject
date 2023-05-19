var fname = document.getElementById("fname").value;
 
    var valid_fname_regex = /^[A-Za-z]+$/;

var lname = document.getElementById("lname").value;
 
    var valid_lname_regex = /^[A-Za-z]+$/;

    if(!(username.match(valid_fname_regex)) ||  !(username.match(valid_lname_regex))){
 
        if(!(name.match(valid_fname_regex))){

         document.getElementById("fname_error").style.visibility = "visible";
         document.getElementById("fname").style.borderColor = "red";
          
       }else{

         document.getElementById("fname_error").style.visibility = "hidden";
         document.getElementById("fname").style.borderColor = "black";

       }
       if(!(name.match(valid_name_regex))){

        document.getElementById("lname_error").style.visibility = "visible";
        document.getElementById("lname").style.borderColor = "red";
         
      }else{

        document.getElementById("lname_error").style.visibility = "hidden";
        document.getElementById("lname").style.borderColor = "black";

      }

       return false;


    }else{

       document.getElementById("fname_error").style.visibility = "hidden";
       document.getElementById("fname").style.borderColor = "black";
       document.getElementById("lname_error").style.visibility = "hidden";
       document.getElementById("lname").style.borderColor = "black";
       
       return true;

    }
