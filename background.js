chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({
    url: 'https://slidesofsurprise.com/',
    active: true
  });
  return false;
});

chrome.commands.onCommand.addListener((command) => {
  console.log(command)
  // if the user invokes the "hide" command...
  if (command === "hide") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      (async () => {
  console.log(tabs)
        const response = await chrome.tabs.sendMessage(tabs[0].id, {command: "hide"});
        console.log(response);
      })();
    });
  }
});