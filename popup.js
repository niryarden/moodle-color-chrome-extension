const onClick = color => {
  return async () => {
    chrome.storage.sync.set({ selectedColor: color });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.reload(tab.id);
  }
};

red.addEventListener("click", onClick("red"));
green.addEventListener("click", onClick("green"));
blue.addEventListener("click", onClick("blue"));
cancel.addEventListener("click", onClick(null));
