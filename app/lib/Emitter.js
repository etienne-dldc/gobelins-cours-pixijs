'use strict';
import setts from '../setts';
import Particle from './Particle';

class Emmitter {
  constructor( scene ) {

    this.pool = [];
    this.poolIndex = 0;
    this.poolSize = 2000;

    for (var i = 0; i < this.poolSize; i++) {
      this.pool.push( new Particle() );
    }

    this.emitPoint = {
      x: window.innerWidth/2,
      y: window.innerHeight/2
    }

    this.scene = scene;
    this.particles = [];

  }

  update( dt ){
    for (var i = 0; i < this.particles.length; i++) {
      var particle = this.particles[i];
      particle.update( dt );
      if ( particle.isDead() ) {
        // Remove child
        this.scene.removeChild(particle);
        this.particles.splice(i, 1);
      }
    }
    let whileLimit = 10;
    while (this.particles.length < setts.nbrOfParticles && whileLimit > 0) {
      this.addParticle();
      whileLimit--;
    }
  }

  addParticle() {

    const options = {
      x: this.emitPoint.x,
      y: this.emitPoint.y,
      ttl: Math.random() * 1000,
      speedMax: setts.particleSpeedMax,
      sizeMax: setts.particleSizeMax
    };

    var newParticle = this.getFromPool();
    newParticle.generate(options);
    this.particles.push(newParticle);
    this.scene.addChild(newParticle);

  }

  setEmitPoint (x, y) {
    this.emitPoint.x = x;
    this.emitPoint.y = y;
  }

  getFromPool() {
    this.poolIndex = (this.poolIndex + 1) % this.pool.length;
    return this.pool[this.poolIndex];
  }

}

export default Emmitter;
