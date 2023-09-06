let colorblindcounter=[1,2,3];
let textenlargementcounter=[1,2,3];
let highlightlinkscounter=[1,2];
let hideimagescounter=[1,2];
let textalgincounter=[1,2,3,4];
let i=0;
let j=0;
let k=0;
let x=0;
let y=0;
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

function highlightlinks()
{
    if(highlightlinkscounter[i]==1)
    {
        i++
    var allAnchorElements = document.querySelectorAll("a, h6,button");
    allAnchorElements.forEach(function(anchorElement) {
    anchorElement.style.color = "yellow";        
    anchorElement.style.backgroundColor = "black"; 
    anchorElement.style.textDecoration = "underline"; 

     });
    }
   else
   {
    i=0;
    var allAnchorElements = document.querySelectorAll("a,h6,button");
    allAnchorElements.forEach(function(anchorElement) {
    anchorElement.style.color = "";      
    anchorElement.style.backgroundColor = "";
    anchorElement.style.textDecoration = ""; 

     });
   }
}
function hideimages()
{
    if(hideimagescounter[i]==1)
    {
        let hideimage = document.getElementById("hideimage");
        hideimage.style.border = "1px solid green";
        let hideimagelogo = document.getElementById("hideimagelogo");
        hideimagelogo.style.transition = "color 0.5s ease";
        hideimagelogo.style.color="green";

        i++
    var allAnchorElements = document.querySelectorAll("img");
    allAnchorElements.forEach(function(anchorElement) {
    anchorElement.style.display = "none";        
     });
    }
   else
   {
    let hideimage = document.getElementById("hideimage");
    hideimage.style.border = "0px solid green";
    let hideimagelogo = document.getElementById("hideimagelogo");
    hideimagelogo.style.transition = "color 0.5s ease";
    hideimagelogo.style.color="#25316D";
    i=0;
    var allAnchorElements = document.querySelectorAll("img");
    allAnchorElements.forEach(function(anchorElement) {
    anchorElement.style.display = "block";        
     });
   }



}




function textalign()
{
    let textalign1logo = document.getElementById("textalign1logo");
    let textalign1logoL = document.getElementById("textalign1logoL");
    let textalign1logoR = document.getElementById("textalign1logoR");
    let textalign1logoC = document.getElementById("textalign1logoC");
    if(textalgincounter[i]==1)
    {
        i++;
        let textalign1 = document.getElementById("textalign1");
        textalign1.style.border = "1px solid green";
        textalign1logo.style.display="none";
        textalign1logoL.style.display="block";
        textalign1logoL.style.transition = "color 0.5s ease";
        textalign1logoL.style.color="green";


        var elementsWithClassReading12 = document.querySelectorAll(".reading12");
        elementsWithClassReading12.forEach(function(element) {
        element.style.textAlign = "left"; // Set text alignment to left
        });
      
    
    }
   else if(textalgincounter[i]==2)
   {
    i++;
    let textalign1 = document.getElementById("textalign1");
    textalign1.style.border = "1px solid green";
    textalign1logoL.style.display="none";
    textalign1logoR.style.display="block";
    textalign1logoR.style.transition = "color 0.5s ease";
    textalign1logoR.style.color="green";


    var elementsWithClassReading12 = document.querySelectorAll(".reading12");
    elementsWithClassReading12.forEach(function(element) {
    element.style.textAlign = "right"; // Set text alignment to left
    });
  
   }
   else if(textalgincounter[i]==3)
   {
    i++;
    let textalign1 = document.getElementById("textalign1");
    textalign1.style.border = "1px solid green";
    textalign1logoR.style.display="none";
    textalign1logoC.style.display="block";
    textalign1logoC.style.transition = "color 0.5s ease";
    textalign1logoC.style.color="green";


    var elementsWithClassReading12 = document.querySelectorAll(".reading12");
    elementsWithClassReading12.forEach(function(element) {
    element.style.textAlign = "center"; // Set text alignment to left
    });

   }
   else
   {
    i=0;
    let textalign1 = document.getElementById("textalign1");
    textalign1.style.border = "0px solid green";
    textalign1logoC.style.display="none";
    textalign1logo.style.display="block";
    textalign1logo.style.transition = "color 0.5s ease";
    textalign1logo.style.color="#25316D";


    var elementsWithClassReading12 = document.querySelectorAll(".reading12");
    elementsWithClassReading12.forEach(function(element) {
    element.style.textAlign = ""; // Set text alignment to left
    });
   }



}







