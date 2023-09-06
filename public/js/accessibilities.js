let colorblindcounter=[1,2,3];
let i=0;
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
    var cssText = "* { filter: saturate(1); filter: hue-rotate(3.542rad);}";

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