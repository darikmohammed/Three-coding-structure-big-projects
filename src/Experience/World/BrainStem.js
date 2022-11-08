import * as THREE from 'three';

import Experience from '../Experience';

export default class BrainStem {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.resources = this.experience.resources;
    this.resource = this.resources.items.brainStemModel;
    this.setModel();
    this.setAnimation();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(1.6, 1.6, 1.6);
    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
      }
    });
  }

  setAnimation() {
    this.animation = {};
    this.animation.mixer = new THREE.AnimationMixer(this.model);
    this.animation.action = this.animation.mixer.clipAction(
      this.resource.animations[0]
    );
    this.animation.action.play();
  }

  update() {
    this.animation.mixer.update(this.time.delta * 0.00065);
  }
}
