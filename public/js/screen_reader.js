let num = 1;
let hasBeenRead = false;
let speaking = false;

function speakText(text) {
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        if (speaking) {
            synth.cancel();
        }

        synth.speak(utterance);
        speaking = true;

        utterance.onend = function () {
            speaking = false;
        };
    } else {
        alert('Text-to-speech is not supported in this browser.');
    }
}

function mouseenterHandler(element) {
    if (!hasBeenRead) {
        const text = element.textContent;
        speakText(text);
        hasBeenRead = true;
    }
}

function mouseleaveHandler() {
    if (speaking) {
        const synth = window.speechSynthesis;
        synth.cancel();
        speaking = false;
    }

    setTimeout(() => {
        hasBeenRead = false;
    }, 10);
}

function buttonPressed12() {
    num++;
    console.log(num);

    const elements = document.querySelectorAll('.reading12');

    if (num % 2 === 0) {
        let screenreader = document.getElementById("screenreader");
        let screenlogo = document.getElementById("screenlogo");
        screenlogo.style.transition = "color 0.5s ease";
        screenreader.style.border = "1px solid green";
        screenlogo.style.color="green";
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                mouseenterHandler(element);
            });
            element.addEventListener('mouseleave', mouseleaveHandler);
           
            });
    } else {
        elements.forEach(element => {
            element.removeEventListener('mouseenter', mouseenterHandler);
            element.removeEventListener('mouseleave', mouseleaveHandler);
            let screenreader = document.getElementById("screenreader");
            screenlogo.style.transition = "color 0.5s ease";
            screenreader.style.border = "0px solid green"; 
            screenlogo.style.color="#25316D";
            
        });
    }
}
