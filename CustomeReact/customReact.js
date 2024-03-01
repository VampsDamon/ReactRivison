const root = document.getElementById("root");
const reactElement = {
  type: 'a',
  props: {
    href: "https://google.com/",
    target: "_blank",
  },
  desc: "Click to Go to Google",
};

const CusttomeRender = (reactElement, root) => {
  const newElem = document.createElement(reactElement.type);
  newElem.innerHTML =reactElement.desc;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    newElem.setAttribute(prop, reactElement.props[prop]);
  }

  root.appendChild(newElem);
};

CusttomeRender(reactElement,root);