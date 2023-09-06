let colorblindcounter=[1,2,3];
let textenlargementcounter=[1,2,3];
let i=0;
let j=0;
function colorblind() {
    
    if(colorblindcounter[i]==1)
    {
        i++;
        var styleElement = document.getElementById("custom-css");
    if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = "custom-css";
        document.head.appendChild(styleElement);
    }

    // Define or modify the CSS rule to set color to black for all elements
    var cssText = "* {filter: saturate(1); filter: hue-rotate(3.542rad);}";

    // If styles already exist, append the new styles
    if (styleElement.innerHTML) {
        styleElement.innerHTML += cssText;
    } else {
        // Otherwise, set the CSS rule
        styleElement.innerHTML = cssText;
    }

    }
    else if(colorblindcounter[i]==2)
    {
        let colorblind12 = document.getElementById("colorblind");
        colorblind12.style.border = "2px solid balck";

        var styleElement = document.getElementById("custom-css");

         if (styleElement) {
   
        styleElement.parentNode.removeChild(styleElement);
        }
        i++;
    var styleElement = document.getElementById("custom-css");
    if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = "custom-css";
        document.head.appendChild(styleElement);
    }

    // Define or modify the CSS rule to set color to black for all elements
    var cssText = "* { filter: saturate(0); }";

    // If styles already exist, append the new styles
    if (styleElement.innerHTML) {
        styleElement.innerHTML += cssText;
    } else {
        // Otherwise, set the CSS rule
        styleElement.innerHTML = cssText;
    }
   
    }
   else
   {
    i=0;
    var styleElement = document.getElementById("custom-css");

    if (styleElement) {

   styleElement.parentNode.removeChild(styleElement);
   }

   }
}


function textenlargement() {
    if(textenlargementcounter[i]==1)
    {
        let textenlarge = document.getElementById("textenlarge");
        textenlarge.style.border = "1px solid green";
        let textenlargelogo = document.getElementById("textenlargelogo");
        textenlargelogo.style.transition = "color 0.5s ease";
        textenlargelogo.style.color="green";

        console.log("weselna?")
        i++
        let text1=document.querySelectorAll(".reading12");
        text1.forEach(function(element) {
            element.style.transform="scale(1.1)";
        });
    }
    else if(textenlargementcounter[i]==2)
    {
        let textenlarge = document.getElementById("textenlarge");
        textenlarge.style.border = "1px solid green";
        let textenlargelogo = document.getElementById("textenlargelogo");
        textenlargelogo.style.transition = "color 0.5s ease";
        textenlargelogo.style.color="green";


        i++
        let text1=document.querySelectorAll(".reading12");
        text1.forEach(function(element) {
            element.style.transform="scale(1.15)";
        });
    }
   else
   {
    let textenlarge = document.getElementById("textenlarge");
        textenlarge.style.border = "0px solid green";
        let textenlargelogo = document.getElementById("textenlargelogo");
        textenlargelogo.style.transition = "color 0.5s ease";
        textenlargelogo.style.color="#25316D";


    i=0;
    console.log("hena");
    let text1=document.querySelectorAll(".reading12");
    text1.forEach(function(element) {
        element.style.transform="scale(1)";
    });

   }




}