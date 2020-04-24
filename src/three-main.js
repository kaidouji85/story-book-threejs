import * as THREE from "three";
import {SimpleCube} from "./simple-cube";
import {SimpleSphere} from "./simple-sphere";

/**
 * three.js メイン処理
 */
export class ThreeMain {
  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const cube = new SimpleCube();
    cube.getObject3D().position.x = 1;

    const sphere = new SimpleSphere();
    sphere.getObject3D().position.x = -1;

    this.gameObjects = [cube, sphere];
    this.gameObjects
      .map(gameObject => gameObject.getObject3D())
      .forEach(object3D => {
        this.scene.add(object3D);
      });

    this.animate();
  }

  /**
   * requestAnimationFrameの処理を行う
   *
   * @return void
   */
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.gameObjects.forEach(gameObject => {
      gameObject.animate();
    });
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * レンダリング対象のHTML要素を返す
   *
   * @return {HTMLCanvasElement} レンダリング対象のHTML要素
   */
  getDomElement() {
    return this.renderer.domElement;
  }
}