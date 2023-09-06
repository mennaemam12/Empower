
let ongo = sessionStorage.getItem('ongo');

if(ongo == 'true'){
   document.getElementById("changable").innerHTML="My Profile"
   document.getElementById("changable").setAttribute("href", "myprofile");
   document.getElementById("upload").style.display="flex";
    document.getElementById("dropdown").style.display="flex";
}
else
{
    document.getElementById("upload").style.display="none";
    document.getElementById("dropdown").style.display="none";
}
let fail1,fail2;
let check=false;




function validateUserName1(field){
   
    if(field=='')
    {
        document.getElementById('nameErr_in').innerHTML='Invalid UserName';
        document.getElementById('er1_in').style.opacity='1';
        return false;
    }
    else 
    {
        document.getElementById('nameErr_in').innerHTML='';
        document.getElementById('er1_in').style.opacity='0';
        return true; 
    }
    
    
}


function validatepass1(field){
   
    if(field=='')
    {
        document.getElementById('passErr_in').innerHTML='Invalid Password';
        document.getElementById('er2_in').style.opacity='1';
        return false;
    }
    else{
    document.getElementById('passErr_in').innerHTML='';
    document.getElementById('er2_in').style.opacity='0';
    return true;
    }
}

   
    

$(document).ready(function () {
    $('#Form2').submit(function (event) {
      event.preventDefault(); // Prevent form submission

      const email = $('#inemail').val();
      const pass=$('#inpass').val();
      // fail1=validateUserName1(email);
      // fail2=validatepass1(pass);
      let toget=false;
      // Send the AJAX request to the server
      // if(fail1&&fail2)
      // {
      $.ajax({
        url: '/reg',
        method: 'POST',
        data: { inemail: email,inpass:pass,page1:"signin"},
        success: function (response) {
          if (response.success == "success") 
          {
            sessionStorage.setItem('ongo', "true");
            sessionStorage.setItem('Email',response.email);
            window.location.replace("/");
          }
          else if(response.success=="admin")
          {
           window.location.replace("/dashboard");
          }
          else
          {
            document.getElementById('semailerr').innerHTML=response.error1;
            document.getElementById('er4').style.opacity='1';
            document.getElementById('spasserr').innerHTML=response.error2;
            document.getElementById('er5').style.opacity='1';
          }
          //document.querySelector('h1').innerHTML=response.data1;
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    




    });
  });








