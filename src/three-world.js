import * as THREE from "three";
import {SimpleCube} from "./simple-cube";
import {SimpleSphere} from "./simple-sphere";

/**
 * three.js メイン処理
 */
export class ThreeWorld {
  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.gameObjects = [];

    this.animate();
  }

  /**
   * ゲームオブジェクトを追加する
   *
   * @param {GameObject} gameObject 追加するゲームオブジェクト
   * @return void
   */
  addGameObject(gameObject) {
    this.gameObjects = this.gameObjects.concat(gameObject);
    this.scene.add(gameObject.getObject3D());
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