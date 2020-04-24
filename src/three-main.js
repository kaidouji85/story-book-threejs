import * as THREE from "three";
import {SimpleCube} from "./cube";

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

    this.cube = new SimpleCube();
    this.scene.add(this.cube.getObject3D());

    this.animate();
  }

  /**
   * requestAnimationFrameの処理を行う
   *
   * @return void
   */
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.animate();
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