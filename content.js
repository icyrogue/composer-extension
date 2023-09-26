(() => {
  const onYT = document.URL.includes("youtube.com/embed")
  var iframe
  var topLayer
  if (!onYT) {
      var intv = setInterval(() => { 
      iframe = document.querySelectorAll('[id$=".pl"]')[0]
      if (iframe) {
      iframe.style.opacity = "0"
      topLayer = document.querySelectorAll('[id$="_1_0"]')[0]
      }
      }, 500);
      chrome.runtime.onMessage.addListener(
        function(request) {
          if (request.show) {
    console.log("__________________________________________________________________________")
    console.log("Showing the iframe")
    console.log("__________________________________________________________________________")
    console.log("__________________________________________________________________________")
    console.log("Showing the iframe")
    console.log("__________________________________________________________________________")
    // if (!counter) {
    //             document.querySelectorAll('[id$=".pl"]')[0].style.opacity = "0"
    //             document.querySelectorAll('[id$="_1_0"]')[0].style.opacity = "0"
    //             counter = true
    //           } else {
                iframe.style.opacity = "1"
                counter = false
                clearInterval(intv)
              // }
          } else {
            iframe.style.opacity = "0"
            topLayer.style.opacity = "0"
        }
        }
      );

      return;
  }

  var counter = 0
  const player = document.querySelector("video")

  if (!player) {
      return;
  }

    player.addEventListener("playing", () => {
    // if (counter >= 2) {
    //     chrome.runtime.sendMessage({show: false});
    // } 
        chrome.runtime.sendMessage({show: true});
        // counter++
    })

    player.addEventListener('ended', function() {
        chrome.runtime.sendMessage({show: false});
        // pause the video
    }, false);

  // function updatePlayerInfo() {
  //   duration = player.duration.toPrecision(3)
  //   current = player.currentTime.toPrecision(3)
  //   frame = (current - prev).toPrecision(3)
  //   console.log(frame)

  //   if (current == duration && duration > 0 && (duration - frame*2) <= current && current <= (duration + frame*2)) {
  //       player.pause();
  //       clearInterval(intv);
  //   }
  //   prev = current 
  // } 

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


