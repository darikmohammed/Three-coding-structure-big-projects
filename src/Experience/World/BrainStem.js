import * as THREE from 'three';

import Experience from '../Experience';

export default class BrainStem {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.resource = this.resources.items.brainStemModel;
    console.log(this.resources);
    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(2, 2, 2);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }
}
