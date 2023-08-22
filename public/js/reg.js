const Form1=document.getElementById("Form1");
const Form2=document.getElementById("Form2");
const signinbut=document.getElementById("signinbut");
const register=document.getElementById("register");
const img=document.getElementById("img");



signinbut.addEventListener('click', function() {
    Form1.style.display = 'none';
    Form2.style.display="flex";
  });
  register.addEventListener('click', function() {
    Form2.style.display = 'none';
    Form1.style.display="flex";
  });











  // -----------------------------------------------------




//   function validateUserName(field){
    
//     if(field=='')
//     {
//        document.getElementById('nameErr').innerHTML='You Must Enter a UserName.';
//        document.getElementById('er1').style.opacity='1';
//        return false;
//    }
//    else{
//    document.getElementById('nameErr').innerHTML='';
//    document.getElementById('er1').style.opacity='0';
//    return true;
//    }
// }

function validateEmail1(input) {
   const validRegex = /^(.+)@(.+)$/;

   if (!validRegex.test(input) ) {
       document.getElementById('emailerr').innerHTML='Check your email.';
       document.getElementById('er1').style.opacity='1';
       return false;
   }
   else{
   document.getElementById('emailerr').innerHTML='';
   document.getElementById('er1').style.opacity='0';
   return true;
   }
}

// function validatePhone(input) {
//    const phoneno = /^\d{11}$/;
//    if(!phoneno.test(input))
//    {
//        document.getElementById('phoneerr').innerHTML='Check your Phone number.';
//        document.getElementById('er3').style.opacity='1';
//        return false;
//    }
//    else{
//        document.getElementById('phoneerr').innerHTML='';
//        document.getElementById('er3').style.opacity='0';
//        return true;
//        }
// }
function validatepass(input1,input2){
   let check=true;
   if(input1=='')
   {
       check=false;
       document.getElementById('passerr').innerHTML='Check Your Password';
       document.getElementById('er2').style.opacity='1';
   }
   else{
       document.getElementById('passerr').innerHTML='';
       document.getElementById('er2').style.opacity='0';
   }
   if(input1.length<=2)
   {
       check=false;
       document.getElementById('passerr').innerHTML='Check Your Password must be 8 char';
       document.getElementById('er2').style.opacity='1';
   }
   else{
       document.getElementById('passerr').innerHTML='';
       document.getElementById('er2').style.opacity='0';
   }
   if(input1!=input2||input2=='')
   {
       check=false;
       document.getElementById('cpasserr').innerHTML='Check Your Confirm Password';
       document.getElementById('er3').style.opacity='1';
   }
   else{
       document.getElementById('cpasserr').innerHTML='';
       document.getElementById('er3').style.opacity='0';
   }
return check;
}

// function adorus()
// {
//    let checkbox=document.getElementById("checker");
//    if(checkbox.checked)
//    {
//        return "admin"
//    }
//    else{
//        return "user"
//    }
// }







$(document).ready(function () {
   $('#Form1').submit(function (event) {
     event.preventDefault(); // Prevent form submission

     const Firstname = $('#Firstname').val();
     const Lastname=$('#Lastname').val();
     const email = $('#Email').val();
     const pass=$('#Password').val();
     const cpass=$('#Cpassword').val();
     const accessibilityValue = $('#accessibilityDropdown').val();
    //  let ongo="";
    //  let pending="";
     let fail=true;
     fail&=validateEmail1(email);
     fail&=validatepass(pass,cpass);
    //  if(fail)
    //    {
    //     ongo=adorus();
    //     if(ongo=="admin")
    //     {
    //        pending="waiting";
    //     }
    //     else
    //     {
    //        pending="true";
          
    //     }
       
    //    }
     // Send the AJAX request to the server
     if(fail)
     {
     $.ajax({
       url: '/reg',
       method: 'POST',
       data: {Firstname:Firstname,Lastname:Lastname,email:email,pass:pass,accessibilityValue:accessibilityValue,page:"signup"},

      //  success: function (response) {
      //    if (response.result == "success") {
      //      if(response.pending1==="waiting")
      //      {
      //         document.getElementById('container').style.display="none";
      //         document.getElementById('outcontainer').style.display="block"

      //      }
      //      else if(response.pending1==="true")
      //      {
      //          sessionStorage.setItem('ongo', response.Role);
      //          sessionStorage.setItem('username',response.UserName);
      //          sessionStorage.setItem('Email',response.Email);
      //          sessionStorage.setItem('Phone',response.Phone);
      //          window.location.replace("/");
               
      //      }
      //      else
      //      {
      //          console.log("not accepted by admin")
      //      }
      //    }
      //    else
      //    {
      //      document.getElementById('nameErr').innerHTML=response.error1;
      //      document.getElementById('er1').style.opacity='1';
      //      document.getElementById('emailErr').innerHTML=response.error2;
      //      document.getElementById('er2').style.opacity='1';
      //    }


         //document.querySelector('h1').innerHTML=response.data1;
      //  },
       error: function (error) {
         console.error(error); // Log any errors that occurred
       },
     });
   }
   });
 });
