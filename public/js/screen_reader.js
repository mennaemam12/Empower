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

        utterance.onend = function() {
            speaking = false; 
        };
    } else {
        alert('Text-to-speech is not supported in this browser.');
    }
}

document.querySelectorAll('.reading12').forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (!hasBeenRead) {
            const text = element.textContent;
            speakText(text);
            hasBeenRead = true; 
        }
    });

    element.addEventListener('mouseleave', () => {
        if (speaking) {
            const synth = window.speechSynthesis;
            synth.cancel();
            speaking = false;
        }

        setTimeout(() => {
            hasBeenRead = false;
        }, 10);
    });
});
