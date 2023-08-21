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
