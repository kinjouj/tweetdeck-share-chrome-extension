chrome.contextMenus.create({
  "id": "tweetdeck_share_ctxmenu",
  "title": "TweetDeckでツイート",
  "contexts": ["page"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.create({ url: "https://tweetdeck.twitter.com" }, (deckTab) => {
    chrome.tabs.executeScript(deckTab.id, { file: "jquery.min.js" }, () => {
      var titleVar = `var tabTitle = "${tab.title}";`;
      var urlVar   = `var tabUrl = "${tab.url}";`;
      chrome.tabs.executeScript(deckTab.id, { code: titleVar + urlVar }, () => {
        chrome.tabs.executeScript(deckTab.id, { file: "inject_script.js" }, () => {
        });
      });
    });
  });
});
