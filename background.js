function injectScript(tabId, injectDetails) {
	
	chrome.tabs.onUpdated.addListener(() => {
		chrome.tabs.executeScript(tabId, injectDetails, (data) => {
			if (chrome.runtime.lastError) {
			  reject(chrome.runtime.lastError.message);
			} else {
			  resolve(data);
			}
		  });
	});
	
  }
  
try {
	injectScript(null, {file: "jquery.min.js"});
	injectScript(null, {file: "inject.js"});

} catch (err) {
	console.error(err);
}

