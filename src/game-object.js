import * as THREE from 'three';

/**
 * ゲームオブジェクト
 * 本クラスはAbstractクラスとして扱う
 * 直接インスタンス化してはいけない
 */
export class GameObject {
  /**
   * シーンに追加するオブジェクトを取得する
   *
   * @return {THREE.Object3D}
   */
  getObject3D() {
    return new THREE.Object3D();
  }

  /**
   * requestAnimationFramの処理
   *
   * @return
   */
  animate() {
    // NOP
  }
}