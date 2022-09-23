const COLORS = [
  {
    id: 'color-0',
    primary: '#96C1A9',
    secondary: '#B7CFB7',
    tertiary: '#D4EBD3'
  },
  {
    id: 'color-1',
    primary: '#b8ffdb',
    secondary: '#ebfff5',
    tertiary: 'white'
  },
  {
    id: 'color-2',
    primary: '#85ffff',
    secondary: '#d1ffff',
    tertiary: 'white'
  },
  {
    id: 'color-3',
    primary: '#dbb8ff',
    secondary: '#e8d1ff',
    tertiary: 'white'
  },
  {
    id: 'color-4',
    primary: '#676767',
    secondary: '#a6a6a6',
    tertiary: 'white'
  },
  {
    id: 'color-5',
    primary: '#fffcb7',
    secondary: '#fffeea',
    tertiary: 'white'
  },
  {
    id: 'color-6',
    primary: '#0b903f',
    secondary: '#4ea96b',
    tertiary: 'white'
  },
  {
    id: 'color-7',
    primary: '#d86289',
    secondary: '#e081a1',
    tertiary: 'white'
  },
  {
    id: 'color-8',
    primary: '#ffc51a',
    secondary: '#ffd24d',
    tertiary: 'white'
  },
  {
    id: 'color-9',
    primary: '#c0ff00',
    secondary: '#e0ff80',
    tertiary: 'white'
  },
  {
    id: 'color-10',
    primary: '#ff794d',
    secondary: '#ff9f80',
    tertiary: 'white'
  },
  {
    id: 'color-11',
    primary: '#ff4d4d',
    secondary: '#ff6666',
    tertiary: 'white'
  },
  {
    id: 'color-12',
    primary: '#ffff00',
    secondary: '#ffff9a',
    tertiary: 'white'
  },
  {
    id: 'color-13',
    primary: '#4da6ff',
    secondary: '#9accff',
    tertiary: 'white'
  },
  {
    id: 'color-14',
    primary: '#008080',
    secondary: '#00b3b3',
    tertiary: 'white'
  },
  {
    id: 'color-15',
    primary: '#cb4154',
    secondary: '#d05566',
    tertiary: 'white'
  },
  {
    id: 'color-16',
    primary: '#b37700',
    secondary: '#e69900',
    tertiary: 'white'
  },
  {
    id: 'color-17',
    primary: '#99cccc',
    secondary: '#bbdddd',
    tertiary: 'white'
  },
  {
    id: 'color-18',
    primary: '#915c83',
    secondary: '#a9779c',
    tertiary: 'white'
  },
  {
    id: 'color-19',
    primary: '#8db600',
    secondary: '#a1d000',
    tertiary: 'white'
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
