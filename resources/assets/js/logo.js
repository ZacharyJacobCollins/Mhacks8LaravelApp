'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LiquidPlane = function () {
  function LiquidPlane(size) {
    _classCallCheck(this, LiquidPlane);

    this.size = size;
    this.grid = {
      size: 28,
      nums: []
    };
  }

  LiquidPlane.prototype.init = function init(scene) {
    var geometry = new THREE.PlaneGeometry(this.size, this.size, this.grid.size, this.grid.size);
    var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh = THREE.SceneUtils.createMultiMaterialObject(geometry, [new THREE.MeshBasicMaterial({ color: 0xFFFFFF, map: this.makeTexture() }), new THREE.MeshBasicMaterial({ color: 0x333352, wireframe: true })]);
    this.mesh.position.set(0, 0, 0);
    scene.add(this.mesh);
    return this;
  };

  LiquidPlane.prototype.makeTexture = function makeTexture() {
    var a = this.grid;
    var size = 512;
    a.canvas = document.createElement('canvas');
    a.canvas.width = size;
    a.canvas.height = size;
    a.ctx = a.canvas.getContext('2d');
    this.texture = new THREE.Texture(a.canvas);
    return this.texture;
  };

  LiquidPlane.prototype.update = function update(ts) {
    var divide = 200;
    this.mesh.rotation.z += 0.005;
    this.mesh.children[0].geometry.verticesNeedUpdate = true;
    this.mesh.children[0].geometry.vertices.forEach(function (v, i) {
      v.z = Math.sin(ts / (v.x * v.y) * 0.8) * Math.cos(v.x * v.y * 0.1) * 30;
    });
    this.updateTexture(ts);
  };

  LiquidPlane.prototype.updateTexture = function updateTexture(ts) {
    var ctx = this.grid.ctx;

    var rad = 32;
    this.texture.needsUpdate = true;
    ctx.save();
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, 512, 512);
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(256 + Math.sin(ts / 200 * 0.8) * 200, 256 + Math.cos(ts / 200 * 0.12) * 200, rad, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(256 + Math.sin(ts / 200 * 1.3) * 200, 256 + Math.cos(ts / 200 * 0.4) * 200, rad, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(256 + Math.sin(ts / 200 * 0.2) * 200, 256 + Math.cos(ts / 200 * 0.95) * 200, rad, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };

  return LiquidPlane;
}();

var width = window.innerWidth;
var height = window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

var plane = new LiquidPlane(70, 'img').init(scene);

function init() {
  setScene();
  renderFrame();
}

function setScene() {
  camera.position.set(0, 0, -150);
  camera.lookAt(scene.position);
  scene.add(camera);
  renderer.setSize(width, height);
  renderer.setClearColor(0x111111);
  document.body.appendChild(renderer.domElement);
}

function renderFrame(ts) {
  window.requestAnimationFrame(renderFrame, renderer.domElement);
  renderer.render(scene, camera);
  plane.update(ts);
}

init();
