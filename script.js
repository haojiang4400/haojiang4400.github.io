// script.js
var audio = document.getElementById("myAudio");
var button = document.getElementById("audioButton");
var icon = document.getElementById("audioIcon");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    audio.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }
}
