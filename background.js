
function runScript(requestDetails) {
    browser.tabs.executeScript({
      file: "no-covid.js"
    });
}

browser.webRequest.onBeforeRequest.addListener(
  runScript,
  {urls: ["<all_urls>"]}
);
