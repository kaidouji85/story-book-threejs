import {ThreeMain} from "./three-main";

window.addEventListener('load', () => {
  const threeMain = new ThreeMain();
  const threeDomElement = threeMain.getDomElement();
  document.body.append(threeDomElement);
});
