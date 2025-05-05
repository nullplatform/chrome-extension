const copyButton = document.getElementById('copyButton');

function updateUI(token) {
    const title = document.getElementById('title');
    const label = document.getElementById('token');

    if (token) {
        title.style.visibility = "visible";
        title.innerHTML = "Here is your <b>personal</b> access token:";
        label.textContent = token;
        label.style.display = "block";
        if (copyButton) {
            copyButton.style.visibility = "visible";
            copyButton.style.display = "block";
        }
    } else {
        title.innerHTML = "No token found, is this a nullplatform tab where you're logged in?";
        title.style.visibility = "visible";
        label.style.display = "none";
        if (copyButton) {
            copyButton.style.display = "none";
        }
    }
}

function getAccessToken() {
    const accessTokenLocalStorageKey = 'accessToken';
    const accessTokenFetchURL = 'https://bff-dashboard.nullplatform.io/v1/auth/accessToken';
    async function _getAccessToken() {
        try {
            const accessTokenFromLocalStorage = localStorage.getItem(accessTokenLocalStorageKey);
            if (accessTokenFromLocalStorage) {
                return accessTokenFromLocalStorage;
            }
            const response = await fetch(accessTokenFetchURL, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            
            const data = JSON.parse(text);
            const token = data.accessToken;
            return token;
        } catch (error) {;
            return null;
        }
    }
    return _getAccessToken();
}

document.addEventListener('DOMContentLoaded', async function() {
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const results = await chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: getAccessToken
    });
    if (results && results[0] && results[0].result) {
        const token = await results[0].result;
        updateUI(token);
    } else {
        updateUI(null);
    }
});

copyButton.addEventListener('click', function() {
    var copyText = document.getElementById('token');
    
    navigator.clipboard.writeText(copyText.textContent)
        .then(() => {
        	copyButton.innerHTML = "Copy to clipboard &#x2713;"; 
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});
