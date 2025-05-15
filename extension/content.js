let answerUrl;
let chapterData;

function fetchChapterData() {
  return new Promise((resolve, reject) => {
    if (chapterData) return resolve(chapterData); // Avoid duplicate requests
    chrome.runtime.sendMessage({ type: "load", url: answerUrl }, (data) => {
      console.table(data);
      if (data) {
        chapterData = data;
        resolve(data);
      } else {
        reject(new Error("Failed to fetch chapter data."));
      }
    });
  });
}

function matchText(textA, textB) {
  const replaceRegex = /[^\w]/gi;
  textA = textA.replace(replaceRegex, "").toLowerCase();
  textB = textB.replace(replaceRegex, "").toLowerCase();
  return textA === textB;
}

function findEntryByQuestion(inputText, chapterData) {
  for (let entry of chapterData) {
    if (matchText(inputText, entry.question)) {
      return entry;
    }
  }
  return null;
}

async function handlePromptQuestion() {
  const inputText = prompt("Enter the question:")?.trim();
  if (!inputText) return;

  try {
    const data = await fetchChapterData();
    const entry = findEntryByQuestion(inputText, data);
    if (!entry) {
      alert("Question not found in the data.");
      return;
    }

    alert(`Correct answer(s):\n- ${entry.answers.join("\n- ")}`);
  } catch (error) {
    console.error("Error while fetching chapter data:", error);
    alert("Error retrieving data.");
  }
}

window.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    handlePromptQuestion();
  } else if (event.key === "p") {
    chrome.storage.local.get(["lastUrl"], (result) => {
      answerUrl = prompt(
        "Please input the answer URL (itexamanswers.net)",
        result.lastUrl
      );
      chrome.storage.local.set({ lastUrl: answerUrl });
      fetchChapterData(); // Preload
    });
  }
});
