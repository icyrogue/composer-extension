chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({
    url: 'https://slidesofsurprise.com/',
    active: true
  });
  return false;
});

var hidden = true;


chrome.runtime.onMessage.addListener(function(message, sender) {
    if (message.show != null) {
        chrome.tabs.sendMessage(sender.tab.id, message);
    }
});

chrome.commands.onCommand.addListener((command) => {
  // if the user invokes the "hide" command...
  if (command === "hide") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      (async () => {
        console.log(hidden);
        const response = await chrome.tabs.sendMessage(tabs[0].id, {command: hidden});
        hidden = response.hidden
      })();
    });
  }
});