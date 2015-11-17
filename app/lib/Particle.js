import { Graphics } from 'pixi.js';

function or(value, def) {
  return  (value !== undefined) ? value : deff;
};

class Particle extends Graphics {

  constructor( options ) {
    super();

    // Location
    this.x = or(options.x, 0);
    this.y = or(options.y, 0);

    // Velocity
    this.vx = or(options.vx, 0);
    this.vy = or(options.vy, 0);

    this.parent = options.parent;

    this.beginFill( 0xFF0000 );
    this.drawCircle(0, 0, 20);

    this.parent.addChild(this);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
  }

}

export default Particle;
