import {ThreeWorld} from "../src/three-world";

export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

export const HelloThreeJS = () => {
  const div = document.createElement('div');
  const threeMain = new ThreeWorld();
  div.appendChild(threeMain.getDomElement());
  return div;
}