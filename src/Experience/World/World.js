import * as THREE from 'three';

import Experience from '../Experience.js';
import Environment from './Environment.js';
import Floor from './Floor.js';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      this.floor = new Floor();
      this.enivronment = new Environment();
    });
  }
}
