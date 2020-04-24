import * as THREE from "three";
import {GameObject} from "./game-object";

/**
 * シンプルなキューブ
 */
export class SimpleCube  extends GameObject {
  constructor() {
    super();
    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(this.geometry, this.material);
  }

  /**
   * シーンに追加するオブジェクトを取得する
   *
   * @return {THREE.Object3D}
   */
  getObject3D() {
    return this.cube;
  }

  /**
   * requestAnimationFrameの処理
   *
   * @return void
   */
  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
