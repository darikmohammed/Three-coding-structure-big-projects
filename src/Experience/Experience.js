import * as THREE from 'three';

import Sizes from './Utils/Sizes';
import Time from './Utils/Time';
import Camera from './Utils/Camera';
import Renderer from './Utils/Renderer';
import World from './World/World';
import Resources from './Utils/Resources';
import Sources from './Sources';

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;
    window.experience = this;

    this.canvas = canvas;
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(Sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    this.sizes.on('resize', () => {
      this.resize();
    });
    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.renderer.update();
  }
}
