const classes = [
  ".year21",
  ".year21 #page-header div.d-flex",
  ".year21 #frame-column, .year21 .login_div3",
  ".year21 .block, .year21 .card-body.p-3, .year21 .card-title.d-inline"
]
const joinedClasses = classes.join(", ");

const getCss = color => {
  return `${joinedClasses} { background-color: ${color} !important; }`;
}

const onClick = color => {
  return async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const css = getCss(color)
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      css: css
    })
  }
};

red.addEventListener("click", onClick("red"));
green.addEventListener("click", onClick("green"));
blue.addEventListener("click", onClick("blue"));
