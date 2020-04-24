import * as THREE from "three";

/**
 * three.js メイン処理
 */
export class ThreeMain {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
    this.animate();
  }

  /**
   * requestAnimationFrameの処理を行う
   *
   * @return void
   */
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
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