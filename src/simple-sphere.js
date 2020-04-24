import * as THREE from "three";
import {GameObject} from "./game-object";

/**
 * シンプルな球体
 */
export class SimpleSphere extends GameObject {
  constructor() {
    super();
    this.geometry = new THREE.SphereGeometry( );
    this.material = new THREE.MeshBasicMaterial({color: 0x0000ff});
    this.sphere = new THREE.Mesh(this.geometry, this.material);
  }

  /**
   * シーンに追加するオブジェクトを取得する
   *
   * @return {THREE.Object3D}
   */
  getObject3D() {
    return this.sphere;
  }

  /**
   * requestAnimationFrameの処理
   *
   * @return void
   */
  animate() {
    this.sphere.rotation.x += 0.01;
    this.sphere.rotation.y += 0.01;
  }
}
