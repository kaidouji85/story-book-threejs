import {ThreeWorld} from "../src/three-world";
import {SimpleSphere} from "../src/simple-sphere";
import {SimpleCube} from "../src/simple-cube";

export default {
  title: 'three-js-objects',
};

export const Sphere = () => {
  const div = document.createElement('div');

  const world = new ThreeWorld();
  div.appendChild(world.getDomElement());

  const sphere = new SimpleSphere();
  world.addGameObject(sphere);

  return div;
}

export const Cube = () => {
  const div = document.createElement('div');

  const world = new ThreeWorld();
  div.appendChild(world.getDomElement());

  const Cube = new SimpleCube();
  world.addGameObject(Cube);

  return div;
}