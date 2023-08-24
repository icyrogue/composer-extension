(() => {
  const onYT = document.URL.includes("youtube.com/embed")
  if (!onYT) {
    console.log(document.URL)
      return;
  }
  hide()

  chrome.runtime.onMessage.addListener(
    function(request, _, sendResponse) {
      if (!request.command) {
        hide()
        sendResponse({hidden: true});
      } else {
        console.log(request.command)
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
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-large-play-button')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'hidden';
  document.getElementsByClassName('ytp-spinner')[0].style.visibility = 'hidden';
  document.getElementsByClassName("html5-video-player")[0].style.backgroundColor = "transparent"
  document.querySelector("body").style.backgroundColor = "transparent"
}

function show() {
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-chrome-controls')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-gradient-top')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-gradient-bottom')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-large-play-button')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-progress-bar-container')[0].style.visibility = 'visible';
  document.getElementsByClassName('ytp-spinner')[0].style.visibility = 'visible';
}

