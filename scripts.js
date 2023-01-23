$(document).on('click','.shot-symbol',function(event) {
    $(".shot-symbol").replaceWith("<img src='recursos/minus.png' class='minus-symbol menos'/>");
});
$(document).on('click','.minus-symbol',function(event) {
    $(".minus-symbol").replaceWith("<img src='recursos/shot.png' class='shot-symbol foto'/>");
});

function hidephoto() {
  var x = document.getElementById("canvas");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function capture() {
  var canvas = document.getElementById("canvas");
  var video = document.querySelector("video");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas
    .getContext("2d")
    .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  const playImage = new Image();
  playImage.src = "path to image asset";
  playImage.onload = () => {
    const startX = video.videoWidth / 2 - playImage.width / 2;
    const startY = video.videoHeight / 2 - playImage.height / 2;
    canvas
      .getContext("2d")
      .drawImage(playImage, startX, startY, playImage.width, playImage.height);
    canvas.toBlob() = (blob) => {
      const img = new Image();
      img.src = window.URL.createObjectUrl(blob);
    };
  };
  /** End **/
}

capture();


$('#audio-control').click(function(){
    if( $(".player__video").prop('muted') ) {
          $(".player__video").prop('muted', false);
          $(".unmute-symbol").replaceWith("<img src='recursos/mute.png' class='mute-symbol mute'/>");
      // or toggle class, style it with a volume icon sprite, change background-position
    } else {
      $(".player__video").prop('muted', true);
      $(".mute-symbol").replaceWith("<img src='recursos/unmute.png' class='unmute-symbol mute'/>");
    }
});
$(document).on('click','.mute-symbol',function(event) {
    $(".mute-symbol").replaceWith("<img src='recursos/unmute.png' class='unmute-symbol mute'/>");
});
$(document).on('click','.unmute-symbol',function(event) {
    $(".unmute-symbol").replaceWith("<img src='recursos/mute.png' class='mute-symbol mute'/>");
});


$(document).on('click','.play-symbol',function(event) {
    $(".play-symbol").replaceWith("<img src='recursos/pause.png' class='pause-symbol pointer'/>");
});
$(document).on('click','.pause-symbol',function(event) {
    $(".pause-symbol").replaceWith("<img src='recursos/play.png' class='play-symbol pointer'/>");
});

function myFunctionkomp1()
{
    if(document.getElementsByClassName("MyDiv1")[0].style.top == '115px'){
        document.getElementsByClassName("MyDiv1")[0].style.top="0px";
        document.getElementsByClassName("MyDiv1")[0].style.right="0px";

    }else{
        document.getElementsByClassName("MyDiv1")[0].style.top="115px";
        document.getElementsByClassName("MyDiv1")[0].style.right="70px";
        document.getElementsByClassName("MyDiv2")[0].style.top="0px";
        document.getElementsByClassName("MyDiv2")[0].style.right="0px";
        document.getElementsByClassName("MyDiv3")[0].style.top="0px";
        document.getElementsByClassName("MyDiv3")[0].style.right="0px";
    }
}
function myFunctionkomp2()
{
    if(document.getElementsByClassName("MyDiv2")[0].style.top == '115px'){
        document.getElementsByClassName("MyDiv2")[0].style.top="0px";
        document.getElementsByClassName("MyDiv2")[0].style.right="0px";
    }else{
        document.getElementsByClassName("MyDiv2")[0].style.top="115px";
        document.getElementsByClassName("MyDiv2")[0].style.right="160px";
        document.getElementsByClassName("MyDiv1")[0].style.top="0px";
        document.getElementsByClassName("MyDiv1")[0].style.right="0px";
        document.getElementsByClassName("MyDiv3")[0].style.top="0px";
        document.getElementsByClassName("MyDiv3")[0].style.right="0px";
    }
}
function myFunctionkomp3()
{
    if(document.getElementsByClassName("MyDiv3")[0].style.top == '115px'){
        document.getElementsByClassName("MyDiv3")[0].style.top="0px";
        document.getElementsByClassName("MyDiv3")[0].style.right="0px";
    }else{
        document.getElementsByClassName("MyDiv3")[0].style.top="115px";
        document.getElementsByClassName("MyDiv3")[0].style.right="250px";
        document.getElementsByClassName("MyDiv1")[0].style.top="0px";
        document.getElementsByClassName("MyDiv1")[0].style.right="0px";
        document.getElementsByClassName("MyDiv2")[0].style.top="0px";
        document.getElementsByClassName("MyDiv2")[0].style.right="0px";
    }
}
// 🌐 Global variables
let mousedown = false;

// 🔎 Query selectors
const playerVideo = document.querySelector(".player__video");
const player = document.querySelector(".player");
const video = player.querySelector(".viewer"); // find the video inside the player
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]"); // will grab anything that has a `data-skip` attribute
const ranges = player.querySelectorAll(".player__slider");
const fsBtn = document.getElementById("fsBtn");


// ⚙️ Functions
function togglePlay() {
  // a ternary, set to a variable - sets the value as the method depending upon the current state of video play
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function SetVolume(val)
    {
        var player = document.getElementById('video');
        console.log('Before: ' + player.volume);
        player.volume = val / 100;
        console.log('After: ' + player.volume);
    }

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // can use `this` because it is bound to the video itself
  toggle.textContent = icon;
}

function skip() {
  const skipTime = parseFloat(this.dataset.skip); // parseFloat will convert the string contained in the dataset into a usable number
  video.currentTime += skipTime;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = ( video.currentTime / video.duration ) * 100;   // sets a % of video playtime
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = ( e.offsetX / progress.offsetWidth ) * video.duration; // returns a % and multiplies by the video time
  video.currentTime = scrubTime;
}

function toggleScreen() {
  !document.fullscreenElement ? playerVideo.requestFullscreen().catch(err => {
        alert("Sorry, unable to enter fullscreen mode: ${err.message} (${err.name})")
      }) : document.exitFullscreen();
}

// 👂 Event listeners
fsBtn.addEventListener("click", toggleScreen);
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate)); // will fire with  mousemovement, not just a click
skipButtons.forEach(button => button.addEventListener("click", skip));
toggle.addEventListener("click", togglePlay);
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e)); // first checks the mousedown variable, and if it is true, moves on to the next piece; if condition 1 is false it will return;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);


function init() {
    document._video = document.getElementById("video");
}
document.addEventListener("DOMContentLoaded", init, false);

//switching videos (playlist)
var videos =
[
 [
	"recursos/zelda-caption.jpg",
	"recursos/zelda.mp4",
  "recursos/zeldasub.vtt"
 ],
 [
	"recursos/mario-caption.jpg",
	"recursos/mario.mp4",
  "recursos/mariosub.vtt"
 ],
 [
	"recursos/smash-caption.jpg",
	"recursos/smash.mp4",
  "recursos/smashsub.vtt"
 ]
 ];
function switchVideo(n) {
	if (n >= videos.length) n = 0;

	var mp4 = document.getElementById("mp4");
	var parent = mp4.parentNode;

	document._video.setAttribute("poster", videos[n][0]);
	mp4.setAttribute("src", videos[n][1]);
  document._video.load();
}


/*An example of all the options of the media API in HTML5
More info here: http://www.w3.org/2010/05/video/mediaevents.html

Buttons styled with RGBA, more info here:
https://zurb.com/article/266/super-awesome-buttons-with-css3-and-rgba
*/


const screen = document.querySelector(".screen");
const center = document.querySelector(".center");
const leftJoycon = document.querySelector(".left-joycon");
const rightJoycon = document.querySelector(".right-joycon");

let animationScreenCount = 1;
let animationCenterCount = 1;



leftJoycon.addEventListener("click", () => {
  leftJoycon.classList.add("switch-up");
  rightJoycon.classList.add("switch-down");
});

rightJoycon.addEventListener("click", () => {
  leftJoycon.classList.add("switch-up");
  rightJoycon.classList.add("switch-down");
});

leftJoycon.addEventListener("animationend", () => {
  leftJoycon.classList.remove("switch-up");
});

rightJoycon.addEventListener("animationend", () => {
  rightJoycon.classList.remove("switch-down");
});

screen.addEventListener("animationend", () => {
  if (animationScreenCount === 2) {
    screen.classList.remove("resize-screen");
    center.classList.remove("resize");
    animationScreenCount = 1;
  } else {
    animationScreenCount += 1;
  }
});
