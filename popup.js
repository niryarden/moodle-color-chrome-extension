const COLORS = [
  {
    id: 'color-0',
    primary: '#ffb8b8',
    secondary: '#ffebeb'
  },
  {
    id: 'color-1',
    primary: '#b8ffdb',
    secondary: '#ebfff5',
  },
  {
    id: 'color-2',
    primary: '#85ffff',
    secondary: '#d1ffff'
  }
];

const onClick = colorItem => {
  return async () => {
    chrome.storage.sync.set({ selectedColor: colorItem });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.reload(tab.id);
  }
};

COLORS.forEach(colorItem => {
  document.getElementById(colorItem.id).addEventListener("click", onClick(colorItem));
})
cancel.addEventListener("click", onClick(null));
