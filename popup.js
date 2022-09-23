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
  },
  {
    id: 'color-3',
    primary: '#dbb8ff',
    secondary: '#e8d1ff'
  },
  {
    id: 'color-4',
    primary: '#676767',
    secondary: '#a6a6a6'
  },
  {
    id: 'color-5',
    primary: '#fffcb7',
    secondary: '#fffeea'
  },
  {
    id: 'color-6',
    primary: '#0b903f',
    secondary: '#4ea96b'
  },
  {
    id: 'color-7',
    primary: '#d86289',
    secondary: '#e081a1'
  },
  {
    id: 'color-8',
    primary: '#ffc51a',
    secondary: '#ffd24d'
  },
  {
    id: 'color-9',
    primary: '#c0ff00',
    secondary: '#e0ff80'
  },
  {
    id: 'color-10',
    primary: '#ff794d',
    secondary: '#ff9f80'
  },
  {
    id: 'color-11',
    primary: '#ff4d4d',
    secondary: '#ff6666'
  },
  {
    id: 'color-12',
    primary: '#ffff00',
    secondary: '#ffff9a'
  },
  {
    id: 'color-13',
    primary: '#4da6ff',
    secondary: '#9accff'
  },
  {
    id: 'color-14',
    primary: '#008080',
    secondary: '#00b3b3'
  },
  {
    id: 'color-15',
    primary: '#cb4154',
    secondary: '#d05566'
  },
  {
    id: 'color-16',
    primary: '#b37700',
    secondary: '#e69900'
  },
  {
    id: 'color-17',
    primary: '#99cccc',
    secondary: '#bbdddd'
  },
  {
    id: 'color-18',
    primary: '#915c83',
    secondary: '#a9779c'
  },
  {
    id: 'color-19',
    primary: '#8db600',
    secondary: '#a1d000'
  },
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
