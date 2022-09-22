window.onload = () => {
  chrome.runtime.sendMessage({ text: "onMoodleLoad" })
}
