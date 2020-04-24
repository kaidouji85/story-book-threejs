import {ThreeWorld} from "../src/three-world";
import {SimpleSphere} from "../src/simple-sphere";

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

export const Sphere = () => {
  const div = document.createElement('div');

  const world = new ThreeWorld();
  div.appendChild(world.getDomElement());

  const sphere = new SimpleSphere();
  world.addGameObject(sphere);

  return div;
}