import { Graphics } from 'pixi.js';
import NumberUtils from '../utils/number-utils';

function or(value, deff) {
  if (value !== undefined) {
    return value;
  }
  if (typeof deff == "function") {
    return deff();
  }
  return deff;
};

class Particle extends Graphics {

  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.ttl = 2000;
    this.color = 0xFFFFFF;
    this.size = 1;
  }

  update( dt ){

    // 60 FPS = 1000 / 60 = 16
    var ms = dt/16;

    this.x += (this.vx * ms);
    this.y += (this.vy * ms);

    this.ttl -= dt;

  }

  isDead() {
    return this.ttl <= 0;
  }

  generate (options) {
    // Location
    this.x = or(options.x, 0);
    this.y = or(options.y, 0);

    let speedMax = or(options.speedMax, 5);
    let sizeMax = or(options.sizeMax, 5);

    // Velocity
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * speedMax;
    this.vx = or(options.vx, () => { return Math.cos(angle) * speed; } );
    this.vy = or(options.vy, () => { return Math.sin(angle) * speed; }  );

    this.ttl = or(options.ttl, 2000);

    const r = NumberUtils.randomInt(255);
    const g = NumberUtils.randomInt(255);
    const b = NumberUtils.randomInt(255);

    this.color = NumberUtils.rgb2int( r, g, b )

    this.size = 0.2 + Math.random() * sizeMax;

    this.clear();

    this.beginFill( this.color );
    this.drawCircle(0, 0, this.size);
  }

}

export default Particle;
