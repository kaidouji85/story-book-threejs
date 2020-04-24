import {ThreeWorld} from "./three-world";
import {SimpleCube} from "./simple-cube";
import {SimpleSphere} from "./simple-sphere";

window.addEventListener('load', () => {
  const world = new ThreeWorld();

  const cube = new SimpleCube();
  cube.getObject3D().position.x = 1;
  world.addGameObject(cube);

  const sphere = new SimpleSphere();
  sphere.getObject3D().position.x = -1;
  world.addGameObject(sphere);

  const threeDomElement = world.getDomElement();
  document.body.append(threeDomElement);
});
