(() => {
  const onYT = document.URL.includes("youtube.com/embed")
  if (!onYT) {
      return;
  }

  const player = document.querySelector("video")
  if (!player) {
      return;
  }

 var intv = setInterval(updatePlayerInfo, 250);
 var prev = player.currentTime

  function updatePlayerInfo() {
    duration = player.duration.toPrecision(3)
    current = player.currentTime.toPrecision(3)
    frame = (current - prev).toPrecision(3)
    console.log(frame)

    if (current == duration && duration > 0 && (duration - frame*2) <= current && current <= (duration + frame*2)) {
        player.pause();
        clearInterval(intv);
    }
    prev = current 
  } 

  hide()

  chrome.runtime.onMessage.addListener(
    function(request, _, sendResponse) {
      if (!request.command) {
        hide()
        sendResponse({hidden: true});
      } else {
        show()
        sendResponse({hidden: false});
      }
    }
  );
})()

function hide() {
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-chrome-top')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-chrome-bottom')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-large-play-button')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-spinner')[0].style.visibility = 'hidden';
  document.getElementsByClassName("html5-video-player")[0].style.backgroundColor = "transparent"
  document.querySelector("body").style.backgroundColor = "transparent"
}

function show() {
  document.getElementsByClassName('ytp-chrome-top')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-chrome-bottom')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-large-play-button')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-spinner')[0].style.visibility = 'visible';
}

