import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { resizeRendererToDisplaySize } from '../utils';

export default class AudioBoxScene {
  constructor(cubeTexture, skyBoxTextures, audio) {
    this.el = document.createElement('canvas');
    this.el.classList.add('scene');
    this.el.classList.add('hide');

    this.audio = audio;

    this.camera = this.createCamera();
    this.orbitControl = this.createOrbitControl(this.camera, this.el);
    this.light = this.createDicrectionalLight();

    this.scene = this.createScene(skyBoxTextures);
    this.cube = this.createCenterCube(cubeTexture);

    this.scene.add(this.cube);
    this.scene.add(this.light);

    this.audioListener = new THREE.AudioListener();
    this.sound = this.createSound(audio, this.audioListener);
    this.camera.add(this.audioListener);

    this.renderer = new THREE.WebGLRenderer({ canvas: this.el });
  }

  createScene(skyBoxTextures) {
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const scene = new THREE.Scene();
    scene.background = cubeTextureLoader.load(skyBoxTextures);
    return scene;
  }

  createSound(audio, listener) {
    const sound = new THREE.Audio(listener);

    const audioLoader = new THREE.AudioLoader();
    audioLoader.load(audio, (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.3);
    });

    return sound;
  }

  createCenterCube(cubeTexture) {
    const boxGeometry = this.createBoxGeometry();
    const cubeMaterials = new Array(6).fill(0).map(() => this.createMaterial(cubeTexture));
    const cube = new THREE.Mesh(boxGeometry, cubeMaterials);
    return cube;
  }

  createCamera() {
    const fov = 75;
    const aspect = 2; // холст по умолчанию
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 3;

    return camera;
  }

  createOrbitControl(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();
  }

  createDicrectionalLight() {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);

    return light;
  }

  createBoxGeometry() {
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    return geometry;
  }

  createMaterial(texture) {
    const loader = new THREE.TextureLoader();
    return new THREE.MeshLambertMaterial({ map: loader.load(texture) });
  }

  animate() {
    const showBox = (time) => {
      const newTime = time * 0.001;

      if (resizeRendererToDisplaySize(this.renderer)) {
        const canvas = this.renderer.domElement;
        this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
        this.camera.updateProjectionMatrix();
      }

      this.cube.rotation.x = newTime;
      this.cube.rotation.y = newTime;

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(showBox);
    };

    requestAnimationFrame(showBox);
  }

  render(parentElement) {
    if (this.el.parentElement === parentElement) {
      return;
    }

    parentElement.insertAdjacentElement('afterBegin', this.el);
  }

  open() {
    this.el.classList.remove('hide');
    this.sound.play();
    this.animate();
  }

  close() {
    this.sound.stop();
    this.el.classList.add('hide');
  }

  get isOpen() {
    return !this.el.classList.contains('hide');
  }
}
