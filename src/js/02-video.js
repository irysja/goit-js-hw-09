import Player from "@vimeo/player";
import throttle from "lodash/throttle";

const vimeoPlayer = document.getElementById("vimeo-player");
const player = new Player(vimeoPlayer);
const saveCurrentTime = throttle(({seconds}) => {
  localStorage.setItem("videoplayer-current-time", seconds);
}, 1000);

async function resumePlayback() {
  const savedTime = localStorage.getItem("videoplayer-current-time");
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}

player.on("timeupdate", saveCurrentTime);

window.addEventListener("DOMContentLoaded", resumePlayback);
