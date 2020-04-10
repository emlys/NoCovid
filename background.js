
function runScript(requestDetails) {
    console.log("script called!");
    browser.tabs.executeScript({
      file: "no-covid.js"
    });
}

browser.webRequest.onBeforeRequest.addListener(
  runScript,
  {urls: ["<all_urls>"]}
);
