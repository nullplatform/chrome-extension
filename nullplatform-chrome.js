const copyButton = document.getElementById('copyButton');

document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: getAccessToken
        }, (results) => {
            // Update popup UI with the token

        	const pat = results[0]?.result;

        	const title = document.getElementById('title');
        	const label = document.getElementById('token');

        	if(pat) {
        		title.style.visibility = "visible";
	    		title.innerHTML = "Here is your <b>personal</b> access token:";
        		label.textContent = pat;
        		copyButton.style.visibility = "visible";
        	} else {
	    		title.innerHTML = "No token found, is this a nullplatform tab where you're logged in?";
        		title.style.visibility = "visible";
        		label.style.display = "none";
        		copyButton.style.display = "none";
        	}
        });
    });
});

copyButton.addEventListener('click', function() {
    var copyText = document.getElementById('token');
    
    navigator.clipboard.writeText(copyText.textContent)
        .then(() => {
        	copyButton.innerHTML = "Copy to clipboard &#x2713;"; 
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});

function getAccessToken() {
    // Access local storage and return the accessToken
    return localStorage.getItem('accessToken');
}

