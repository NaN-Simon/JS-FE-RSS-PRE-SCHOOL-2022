function c1(c) {
  console.log(c);
}
const supPlayer = document.querySelector(".sub-player");
const audio = document.querySelector(".audio");
const playPauseBtn = document.querySelector(".play-pause");
const PlayPauseImgSrc = document.querySelector(".play-pause-img__src");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const songTitle = document.querySelector(".song-title");
const coverPng = document.querySelector(".cover-png");
const durationTime = document.querySelector(".duration-time");
const currentTime = document.querySelector(".current-time");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const background = document.querySelector(".background");


const songs = ["Beyonce - Don't Hurt Yourself", "assets audio dontstartnow"];
let songIndex = 0;

function loadSong(song) {
  songTitle.innerHTML = song;
  audio.src = `./assets/music/${song}.mp3`;
  coverPng.src = `./assets/images/cover${songIndex}.png`;
  background.src = `./assets/images/cover${songIndex}.png`;
}
loadSong(songs[songIndex]);

//play
function playSong() {
  supPlayer.classList.add(".play");
  audio.play();
  PlayPauseImgSrc.src = "./assets/icons/pause.png";
}
function pauseSong() {
  supPlayer.classList.remove(".play");
  audio.pause();
  PlayPauseImgSrc.src = "./assets/icons/play.png";
}
playPauseBtn.addEventListener("click", () => {
  const isPlay = supPlayer.classList.contains(".play");
  if (isPlay) {
    pauseSong();
  } else {
    playSong();
  }
});

//next
next.addEventListener("click", () => {
  if (songIndex + 1 == songs.length) {
    songIndex = 0;
  } else {
    songIndex ++;
  }
  loadSong(songs[songIndex]);
  playSong();
});

//prev
prev.addEventListener("click", () => {
  if (songIndex == 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex --;
  }
  loadSong(songs[songIndex]);
  playSong();
});

//progress bar
function updateProgress(e){
  const {duration,currentTime} = e.srcElement
  const progressProcent = (currentTime/duration)*100
  progress.style.width = `${progressProcent}%`
}
audio.addEventListener('timeupdate',updateProgress)
