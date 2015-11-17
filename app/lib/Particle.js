import { Graphics } from 'pixi.js';

class Particle {

  constructor( options ) {
    this.x = options.x;
    this.y = options.y;
    this.parent = options.parent;

    this.el = new Graphics();
    this.el.beginFill( 0xFF0000 );
    this.el.drawCircle(0, 0, 20);

    this.el.x = this.x;
    this.el.y = this.y;

    this.parent.addChild(this.el);
  }

}

export default Particle;
