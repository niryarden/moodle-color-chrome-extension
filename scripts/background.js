const YEAR_PLACEHOLDER = "YEAR_PLACEHOLDER";

const primaryClasses = [
  "#page-header .card"
];

const secondaryClasses = [
  `.year${YEAR_PLACEHOLDER} .login_div3`,
  `.year${YEAR_PLACEHOLDER} #frame-column`
];

const tertiaryClasses = [
  `.year${YEAR_PLACEHOLDER} .card-body.p-3`,
];

const removeBorderClasses = [
  "#page-header div.d-flex",
  "#page-header div.flex-wrap"
];

const removeBackgroundClasses = [
  `.year${YEAR_PLACEHOLDER} #page-header div.d-flex`
];

const getJoinedClasses = (classes, year) => {
  const withYear = classes.map(classBefore => {
    return classBefore.replaceAll(YEAR_PLACEHOLDER, year)
  })
  return withYear.join(", ");
}

const getCss = (colorItem, year) => {
  const primaryCss = `
    ${getJoinedClasses(primaryClasses, year)} {
      background-color: ${colorItem.primary} !important;
    } 
  `
  const secondaryCss = `
    ${getJoinedClasses(secondaryClasses, year)} {
      background-color: ${colorItem.secondary} !important;
    }
  `

  const tertiaryCss = `
    ${getJoinedClasses(tertiaryClasses, year)} {
      background-color: ${colorItem.tertiary} !important;
    }
  `

  const moreCss = `
    ${getJoinedClasses(removeBorderClasses, year)} {
      border: none !important;
    }
    ${getJoinedClasses(removeBackgroundClasses, year)} {
      background: none !important;
    }
  `

  return primaryCss + secondaryCss + tertiaryCss + moreCss;
}

const getYear = tab => {
  const url = tab.url;
  const startsWithYear = url.replace("https://moodle2.cs.huji.ac.il/nu", "");
  return startsWithYear.slice(0, 2);
}

const changeColor = async colorItem => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const year = getYear(tab);
  const css = getCss(colorItem, year);
  chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    css: css
  });
}

const onMoodleLoad = () => {
  chrome.storage.sync.get("selectedColor", ({ selectedColor: colorItem }) => {
    if (colorItem) {
      changeColor(colorItem);
    }
  });
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.text === "onMoodleLoad") {
    onMoodleLoad();
  }
});
