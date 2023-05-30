import Player from "@vimeo/player";
import throttle from "lodash/throttle";

const vimeoPlayer = document.getElementById("vimeo-player");
const player = new Player(vimeoPlayer);
const saveCurrentTime = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000);

async function resumePlayback() {
  const savedTime = localStorage.getItem("videoplayer-current-time");
  if (savedTime) {
    await player.setCurrentTime(savedTime);
  }
}

player.on("timeupdate", saveCurrentTime);

window.addEventListener("DOMContentLoaded", resumePlayback);
