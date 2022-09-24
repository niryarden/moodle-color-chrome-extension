const COLORS = [
  {
    id: 'color-0',
    primary: '#91C4C3',
    secondary: '#A5D8D8',
    tertiary: '#C8F9F9'
  },
  {
    id: 'color-1',
    primary: '#A9D59C',
    secondary: '#C6F3BC',
    tertiary: '#DAF7D3'
  },
  {
    id: 'color-2',
    primary: '#F1D796',
    secondary: '#FFEBB9',
    tertiary: '#FFF3D8'
  },
  {
    id: 'color-3',
    primary: '#ED9E9F',
    secondary: '#FFB2B2',
    tertiary: '#FEDDDD'
  },
  {
    id: 'color-4',
    primary: '#B1B2FF',
    secondary: '#AAC4FF',
    tertiary: '#D2DAFF'
  },
  {
    id: 'color-5',
    primary: '#4E944F',
    secondary: '#83BD75',
    tertiary: '#B4E197'
  },
  {
    id: 'color-6',
    primary: '#ffdc34',
    secondary: '#ffe568',
    tertiary: '#fff3b7'
  },
  {
    id: 'color-7',
    primary: '#A084CA',
    secondary: '#BFACE0',
    tertiary: '#EBC7E8'
  },
  {
    id: 'color-8',
    primary: '#71a5de',
    secondary: '#aecbeb',
    tertiary: '#e1ecf7'
  },
  {
    id: 'color-9',
    primary: '#3acbc7',
    secondary: '#99ecea',
    tertiary: '#c9fcfb'
  },
  {
    id: 'color-10',
    primary: '#F76E11',
    secondary: '#FF9F45',
    tertiary: '#FFBC80'
  },
  {
    id: 'color-11',
    primary: '#A2654D',
    secondary: '#E7D3CB',
    tertiary: '#FBF5E9'
  },
  {
    id: 'color-12',
    primary: '#CDF0EA',
    secondary: '#ECC5FB',
    tertiary: '#F9F9F9'
  },
  {
    id: 'color-13',
    primary: '#DA5B48',
    secondary: '#EDDAA7',
    tertiary: '#F8F0DB'
  },
  {
    id: 'color-14',
    primary: '#5C695F',
    secondary: '#D8C7B7',
    tertiary: '#FBF5E9'
  },
  {
    id: 'color-15',
    primary: '#083431',
    secondary: '#C9C7C0',
    tertiary: '#FBF5E9'
  },
  {
    id: 'color-16',
    primary: '#453D3A',
    secondary: '#9A9590',
    tertiary: '#D1CCC8'
  },
  {
    id: 'color-17',
    primary: '#887A88',
    secondary: '#A9A6A9',
    tertiary: '#DCDCDC'
  },
  {
    id: 'color-18',
    primary: '#A1A1AC',
    secondary: '#C2C2CD',
    tertiary: '#DFDFEB'
  },
  {
    id: 'color-19',
    primary: '#ABABAB',
    secondary: '#C4C4C4',
    tertiary: '#EAEAEA'
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
reset.addEventListener("click", onClick(null));
