import Dat from 'dat-gui';
import Scene from './scene/scene';
import { Graphics } from 'pixi.js';
import NumberUtils from './utils/number-utils';
import Particle from './lib/Particle';

class App {

  constructor() {

    this.DELTA_TIME = 0;
    this.LAST_TIME = Date.now();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();

    let root = document.body.querySelector('.app')
    root.appendChild( this.scene.renderer.view );

    const options = {
      parent: this.scene,
      x: this.width/2,
      y: this.height/2
    }

    let p = new Particle(options);

    this.addListeners();

  }

  /**
   * addListeners
   */
  addListeners() {

    window.addEventListener( 'resize', this.onResize.bind(this) );
    TweenMax.ticker.addEventListener( 'tick', this.update.bind(this) )

  }

  /**
   * update
   * - Triggered on every TweenMax tick
   */
  update() {

    this.DELTA_TIME = Date.now() - this.LAST_TIME;
    this.LAST_TIME = Date.now();

    this.scene.render();

  }



  /**
   * onResize
   * - Triggered when window is resized
   * @param  {obj} evt
   */
  onResize( evt ) {

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene.resize( this.width, this.height );


  }


}

export default App;
