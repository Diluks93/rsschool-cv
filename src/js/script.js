// interactive hamburger //

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active')
});

// element tabs //

const tab = document.getElementById('tabs'),
      content = document.querySelectorAll('.content');

tab.addEventListener('mouseover', (e) => {
  const currTab = e.target.dataset.btn;
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove('active');
    if (content[i].dataset.content === currTab) {
      content[i].classList.add('active');
    }
  }
});

// styles video-player control //

const player = document.querySelector('.video__player'),
  video = document.querySelector('.video__video'),
  play = document.querySelector('button'),
  toggle = document.querySelector('.toggle-play'),
  progress = document.getElementById('progress'),
  progressBar = document.getElementById('progress-filled'),
  volume = document.getElementById('volume'),
  mute = document.getElementById('mute'),
  fullscreen = document.getElementById('fullscreen');

// change button play or pause
function togglePlay() {
  const playState = video.paused ? 'play' : 'pause';
  video[playState]();
}

function updateButton() {
  const togglePlayBtn = document.querySelector('.toggle-play');

  if (this.paused) {
    togglePlayBtn.innerHTML = `<svg class="icon"><use xlink:href="src/icons/videoSpriteIcons.svg#playSmall"></use></svg>`;
    play.innerHTML = `<svg class="icon"><use xlink:href="src/icons/videoSpriteIcons.svg#play"></use></svg>`;
  } else {
    togglePlayBtn.innerHTML = `<svg class="icon"><use xlink:href="src/icons/videoSpriteIcons.svg#pauseSmall"></use></svg>`;
    play.innerHTML = ``;
  }
}

// interactive progress progress
function scrub(e) {
  const scrubTime =
    (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// interactive volume
function videoChangeVolume() {
  let vol = volume.value / 100;
  video.volume = vol;
}

function videoMute() {
  if (video.volume === 0) {
    video.volume = volume.value / 100;
    mute.innerHTML = `<svg class="icon"><use xlink:href="src/icons/videoSpriteIcons.svg#sound"></use></svg>`;
    const value = volume.value;
    volume.style.background = `linear-gradient(to right, #125263 0%, #125263 ${value}%, #fff ${value}%, #fff 100%)`;
  } else {
    video.volume = 0;
    mute.innerHTML = `<svg class="icon"><use xlink:href="src/icons/videoSpriteIcons.svg#mute"></use></svg>`;
    const value = video.volume;
    volume.style.background = `linear-gradient(to right, #125263 0%, #125263 ${value}%, #fff ${value}%, #fff 100%)`;
  }
}

function handleProgress() {
  const percent =
    (video.currentTime / video.duration) * 100;
  progress.style.background = `linear-gradient(to right, #125263 0%, #125263 ${percent}%, #fff ${percent}%, #fff 100%)`;
  progressBar.style.left = `${percent}%`;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function togglePlaybackRate(value) {
  let next = video.playbackRate + value;
  if (next >= 0.25 && next <= 2) {
    video.playbackRate = next;
  }
}

// Even Listener 'click'

fullscreen.addEventListener('click', toggleFullscreen);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);
volume.addEventListener('change', videoChangeVolume);
mute.addEventListener('click', videoMute);

toggle.addEventListener('click', togglePlay);

// Even Listener keyboard
document.addEventListener('keyup', interactionKeyboard);

function interactionKeyboard(event) {
  switch (event.code) {
    case 'Space':
      togglePlay();
      break;
    case 'KeyM':
      videoMute();
      break;
    case 'KeyF':
      toggleFullscreen();
      break;
    case 'KeyJ':
      video.currentTime -= 10;
      break;
    case 'KeyL':
      video.currentTime += 10;
      break;
    case 'Comma':
      togglePlaybackRate(-0.25);
      break;
    case 'Period':
      togglePlaybackRate(0.25);
      break;
    case 'Digit0':
    case 'Digit1':
    case 'Digit2':
    case 'Digit3':
    case 'Digit4':
    case 'Digit5':
    case 'Digit6':
    case 'Digit7':
    case 'Digit8':
    case 'Digit9':
    case 'Numpad0':
    case 'Numpad1':
    case 'Numpad2':
    case 'Numpad3':
    case 'Numpad4':
    case 'Numpad5':
    case 'Numpad6':
    case 'Numpad7':
    case 'Numpad8':
    case 'Numpad9':
      if (isNaN(+event.key)) {
        break;
      }
      video.currentTime =
        (video.duration / 10) * +event.key;
      break;
  }
}

// interaction progress-bar and volume
volume.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #125263 0%, #125263 ${value}%, #fff ${value}%, #fff 100%)`;
});