
let ongo;
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

    function forget()
    {
        document.getElementById("myForm1").style.display="none"
        document.getElementById("myForm2").style.display="block";
    }
    function signin()
    {
        document.getElementById("myForm2").style.display="none";
        document.getElementById("myForm1").style.display="block";
        document.getElementById("myForm1").style.paddingTop="40%";
    }
    function Email()
    {
        document.getElementById("myForm3").style.display="none";
        document.getElementById("myForm2").style.display="block";
    }
    

$(document).ready(function () {
    $('#myForm1').submit(function (event) {
      event.preventDefault(); // Prevent form submission

      const username = $('#username_in').val();
      const pass=$('#password_in').val();
      fail1=validateUserName1(username);
      fail2=validatepass1(pass);
      let toget=false;
      // Send the AJAX request to the server
      if(fail1&&fail2)
      {
      $.ajax({
        url: '/login',
        method: 'POST',
        data: { username_in: username,pass_in:pass,page1:"signin"},
        success: function (response) {
          if (response.success == "success") 
          {
            if(response.Pending==="true")
            {
              sessionStorage.setItem('ongo', response.Role);
              sessionStorage.setItem('username',response.UserName);
              sessionStorage.setItem('Email',response.Email1);
              sessionStorage.setItem('Phone',response.Phone);
              window.location.replace("/"); 
            }
            else if(response.Pending==="waiting")
            {
              document.getElementById('container').style.display="none";
              document.getElementById('outcontainer').style.display="block"
            }
          }
          else
          {
            if(response.num==3)
            {
            document.getElementById('nameErr_in').innerHTML=response.error1;
            document.getElementById('er1_in').style.opacity='1';
            document.getElementById('passErr_in').innerHTML=response.error2;
            document.getElementById('er2_in').style.opacity='1';
            }
            else
            {
              let count = 10;
              document.getElementById('passErr_in').innerHTML = "Wait For " + count + " sec to try again";
              document.getElementById('er2_in').style.opacity = '1';
              document.getElementById("signinbut").style.opacity = '0';
              document.getElementById("signinbut").style.cursor = 'default';

              const countdownInterval = setInterval(() => {
              count--;
              document.getElementById('passErr_in').innerHTML = "Wait For " + count + " sec to try again";
              if (count === 0) {
              clearInterval(countdownInterval);
              document.getElementById('passErr_in').innerHTML ="If you forgot your password Try Forget Password";
              document.getElementById("signinbut").style.opacity = '1';
              document.getElementById("signinbut").style.cursor = 'pointer';
              }
              }, 1000);


            }
            
          }


          //document.querySelector('h1').innerHTML=response.data1;
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    }




    });
  });








