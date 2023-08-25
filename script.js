const button = document.querySelector("button");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onStart = function () {
  console.log("Speech Recognition started");
};
recognition.onresult = function (event) {
  console.log(event);
  const spokenwords = event.results[0][0].transcript;
  console.log("spoken words are", spokenwords);
  computerSpeech(spokenwords);
};

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;
  determineWords(speech, words);
  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("how are you")) {
    speech.text = "I am fine.thank you!";
  }

  if (words.includes("Hows the weather outside")) {
    speech.text = "I will direct you to weather update link";
    window.open(
      "https://www.google.com/search?q=weather+&sca_esv=559959589&rlz=1C5MACD_enIN1038IN1040&sxsrf=AB5stBgljWBWMqwRgi82g9aLGsI_8OfWpg%3A1692941996705&ei=rD7oZL3VKqbuseMPpaCVKA&ved=0ahUKEwi929qyjPeAAxUmd2wGHSVQBQUQ4dUDCA8&uact=5&oq=weather+&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHdlYXRoZXIgMgcQIxiKBRgnMgcQABiKBRhDMgcQABiKBRhDMhAQABiABBgUGIcCGLEDGIMBMgUQABiABDITEAAYgAQYFBiHAhixAxiDARjJAzIIEAAYigUYkgMyCBAAGIoFGJIDMgUQABiABDIHEAAYigUYQ0jOB1DSAlidBXABeAGQAQCYAbgBoAHfA6oBAzAuM7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgINEAAYgAQYFBiHAhixA8ICCxAAGIAEGLEDGIMBwgIKEAAYigUYsQMYQ8ICCBAAGIAEGLED4gMEGAAgQYgGAZAGCg&sclient=gws-wiz-serp"
    );
  }
  if (words.includes("Open google for me")) {
    speech.text = "Give me a moment I will direct you to google";
    window.open("https://www.google.com/");
  }
}
button.addEventListener("click", () => {
  recognition.start();
});
