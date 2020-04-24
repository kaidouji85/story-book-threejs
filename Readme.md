# storybook + three.js検証

このリポジトリはstorybookでthree.jsのオブジェクトを表示する検証用プロジェクトです。

# 前提条件

* node.js(12以上)がインストールされていること
* WebGLに対応したWebブラウザがインストールされていること

# ローカル環境で動かす
## 事前準備
本作業はリポジトリclone後に、1回だけ実施する。

```
cd <本リポジトリをcloneした場所>
npm ci
```

## プロダクトを動かす
```
cd <本リポジトリをcloneした場所>
npm start
# Webブラウザでlocalhost:8080を開く
# 四角形
```

## storybookを動かす
```
cd <本リポジトリをcloneした場所>
npm run storybook
```