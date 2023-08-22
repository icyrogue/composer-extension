
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

console.log("waiting")

chrome.runtime.onMessage.addListener(
  function(request, _, sendResponse) {
  console.log("waiting")
    if (request.command === "hide") {
      play()
      sendResponse({farewell: "hidden"});
      }
  }
);







