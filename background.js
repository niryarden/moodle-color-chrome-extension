const primaryClasses = [
  ".year21 #page-header div.d-flex",
  ".year21 #frame-column, .year21 .login_div3"
];
const joinedPrimaryClasses = primaryClasses.join(", ");

const secondaryClasses = [
  ".year21 .block, .year21 .card-body.p-3, .year21 .card-title.d-inline",
  ".year21",
];
const joinedSecondaryClasses = secondaryClasses.join(", ");

const removeBorderClasses = [
  "#page-header div.d-flex",
  "#page-header div.flex-wrap"
];
const joinedRemoveBorderClasses = removeBorderClasses.join(", ");

const getCss = colorItem => {
  const primaryCss = `
    ${joinedPrimaryClasses} {
      background-color: ${colorItem.primary} !important;
      background: ${colorItem.primary} !important;
    } 
  `
  const secondaryCss = `
    ${joinedSecondaryClasses} {
      background-color: ${colorItem.secondary} !important;
    }
  `

  const moreCss = `
    ${joinedRemoveBorderClasses} {
      border: none !important;
    }
  `

  return primaryCss + secondaryCss + moreCss;
}

const changeColor = async colorItem => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const css = getCss(colorItem);
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
