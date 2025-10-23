<h2 align="center">
    <a href="https://httpie.io" target="blank_">
        <img height="100" alt="nullplatform" src="https://nullplatform.com/favicon/android-chrome-192x192.png" />
    </a>
    <br>
    <br>
    nullplatform extension for Chrome
    <br>
</h2>


This Chrome extension helps you quickly retrieve your **personal access token** and use it to make authenticated calls
to the nullplatform API.

# How to install or update

1. Clone this repository to any directory, for example:

   ```bash
   git clone https://github.com/nullplatform/nullplatform-chrome.git ~/nullplatform-chrome
   ```

2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable Developer mode (toggle in the top-right corner).
4. Click **Load unpacked** and select the directory where you cloned the repository.
5. The extension will now be installed or updated.

💡 **Tip**: Pin the extension to your Chrome toolbar (📌 icon) for quicker access.

# Usage: Retrieve your personal access token

To retrieve your personal access token, just:

1. Log in to nullplatform in a Chrome tab.
2. Click the nullplatform extension icon.
3. A popup will appear showing **your personal access token**.
4. Click **Copy to clipboard** to easily paste it into any cURL command or script.

# Troubleshooting

If you see the following message when using the extension:

> *"No token found. Make sure you’re logged in to nullplatform in this tab."*

This usually means one of the following:

1. You're not on a logged-in nullplatform tab

    Make sure you have the platform open in a tab where you are already logged in. Then click the extension again.

2. You need to update the extension

    If you’re still seeing this message while on a logged-in tab, update the extension:

      - Remove it and reinstall following the steps in [How to install or update](#how-to-install-or-update)

    We release periodic updates, so make sure you’re using the latest version.