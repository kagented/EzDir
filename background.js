searchGmap = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.google.com/maps/dir//" + query});
};

chrome.contextMenus.create({
title: "Get Directions!",
contexts:["selection"], 
onclick: searchGmap
});
