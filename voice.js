/* ===================================
   NEZ ANIME
   voice.js
=================================== */

// Speech Recognition

const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;

let recognition;

if (SpeechRecognition) {

    recognition = new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.continuous = false;

    recognition.interimResults = false;

    const voiceButton = document.getElementById("voiceSearch");

    if (voiceButton) {

        voiceButton.addEventListener("click", () => {

            recognition.start();

            voiceButton.innerHTML = "🎙 Listening...";

        });

    }

    recognition.onresult = function(event){

        const transcript =
        event.results[0][0].transcript;

        const searchInput =
        document.getElementById("searchInput");

        searchInput.value = transcript;

        if(typeof searchAnime === "function"){

            searchAnime(transcript);

        }

    };

    recognition.onend = function(){

        const voiceButton =
        document.getElementById("voiceSearch");

        if(voiceButton){

            voiceButton.innerHTML = "🎤";

        }

    };

}else{

    console.log("Speech Recognition not supported.");

}

/* ===========================
   TEXT TO SPEECH
=========================== */

const speakButton =
document.getElementById("ttsButton");

if(speakButton){

    speakButton.addEventListener("click",()=>{

        const input =
        document.getElementById("searchInput").value;

        const text =
        input.length > 0
        ? input
        : "Welcome to Nez Anime.";

        const speech =
        new SpeechSynthesisUtterance(text);

        speech.rate = 1;

        speech.pitch = 1;

        speech.volume = 1;

        speech.lang = "en-US";

        speechSynthesis.speak(speech);

    });

}

/* ===========================
   Voice Command Shortcuts
=========================== */

if(recognition){

recognition.onresult = function(event){

const words =
event.results[0][0].transcript.toLowerCase();

const searchInput =
document.getElementById("searchInput");

searchInput.value = words;

if(words.includes("home")){

window.scrollTo({
top:0,
behavior:"smooth"
});

}

else if(words.includes("settings")){

document
.getElementById("settings")
.scrollIntoView({
behavior:"smooth"
});

}

else{

searchAnime(words);

}

};

}

console.log("Voice System Loaded");
