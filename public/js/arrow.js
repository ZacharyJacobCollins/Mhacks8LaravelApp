  class LiquidPlane {
    constructor (size) {
      this.size = size; //this size is how big the shape is
      this.grid = {
        size: 28,
        nums: []
      };
    }
    init (scene) {
      const geometry = new THREE.PlaneGeometry(this.size, this.size, 7, 7);
      const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh = THREE.SceneUtils.createMultiMaterialObject( geometry, [

        new THREE.MeshBasicMaterial({ color: 0xFFFFFF, map: this.makeTexture() }),
        new THREE.MeshBasicMaterial( { color: 0x333352, wireframe: true} )

      ]);
      this.mesh.position.set(0, 0, 0);
      scene.add(this.mesh);
      return this;
    }
    makeTexture () {
      const a = this.grid;
      const size = 512;

      a.canvas = document.createElement('canvas');
      a.canvas.width = size;
      a.canvas.height = size;
      a.ctx = a.canvas.getContext('2d');
      this.texture = new THREE.Texture(a.canvas);
      return this.texture;

    }
    update (ts) {
      const divide = 200;
      this.mesh.rotation.z = 3.92;
      this.mesh.children[0].geometry.verticesNeedUpdate = true;
      this.mesh.children[0].geometry.vertices.forEach((v, i) => {
        v.z = (Math.sin((ts / (v.x * v.y) * 0.8)) * Math.cos(v.x * v.y * 0.1)) * 40;

      });
      this.updateTexture(ts);
    }
    updateTexture (ts) {
      const { ctx } = this.grid;
      const rad = 32;
      this.texture.needsUpdate = true;
      ctx.save();
      ctx.fillStyle = '#111';
      //ctx.fillRect(0, 0, 512, 512);
      ctx.fillStyle = 'orange';
      ctx.beginPath();
      ctx.arc(
        256 + Math.sin(ts / 200 * 0.8) * 200,
        256 + Math.cos(ts / 200 * 0.12) * 200,
        rad, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(
        256 + Math.sin(ts / 200 * 1.3) * 200,
        256 + Math.cos(ts / 200 * 0.4) * 200,
        rad, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(
        256 + Math.sin(ts / 200 * 0.2) * 200,
        256 + Math.cos(ts / 200 * 0.95) * 200,
        rad, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
  }

  const width = 50;
  const height = 50;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({alpha:true});


  const plane = new LiquidPlane(100, 'img').init(scene);

  function init() {
    setScene();
    renderFrame();
  }

  function setScene() {
    camera.position.set(0, 0, -150);
    camera.lookAt(scene.position);
    scene.add(camera);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
	  document.getElementById("arrowContainer").appendChild(renderer.domElement);

  }

  function renderFrame(ts) {
    window.requestAnimationFrame(renderFrame, renderer.domElement);
    renderer.render(scene, camera);
    plane.update(ts);
  }

  init();
