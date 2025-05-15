This is provided as a proof-of-concept and is not intended to actually be used to pass Cisco exams.  
Use this at your own risk.

# NetAcad Auto Answer Extension (Proof of Concept)

A lightweight browser extension that allows you to preload answers from itexamanswers.net  
and match them to questions on the **new NetAcad** exam interface.

# Install

## Chrome

To install the extension in Chrome:

1. Open `chrome://extensions/` in your browser.
2. Enable **Developer Mode** in the top right corner.
3. Click the **Load unpacked** button that appears.
4. Select the `extension` directory.
5. (Optional) Hide the extension icon by moving it into the Chrome menu.

## Firefox

To install the extension in Firefox:

1. Visit `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…** in the top right.
3. Select the `manifest.json` file inside the `extension` directory.

> ⚠️ You must repeat this process every time you restart Firefox (it's temporary).

# Use

1. Navigate to the **new NetAcad** exam page.
2. Press `P` on your keyboard to enter the URL of the corresponding answers page from `itexamanswers.net`.
3. The extension will fetch and store the answers in the background.
4. Press `A` to enter a question and get the correct answer(s) displayed in an alert.

# Notes

- Questions are matched using a simplified text comparison (ignoring punctuation and case).
- Make sure you use the **exact same wording** as in the original question to get a successful match.
- Answer URLs must be publicly accessible pages from `itexamanswers.net` containing question/answer pairs.

---

