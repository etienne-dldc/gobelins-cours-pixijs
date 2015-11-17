import setts from './setts';
import Scene from './scene/scene';
import { Graphics } from 'pixi.js';
import NumberUtils from './utils/number-utils';
import Emitter from './lib/Emitter';

class App {

  constructor() {

    this.DELTA_TIME = 0;
    this.LAST_TIME = Date.now();

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();

    let root = document.body.querySelector('.app')
    root.appendChild( this.scene.renderer.view );

    this.lastMousePos = {x: 0, y: 0};

    this.emitter = new Emitter(this.scene);

    this.bindMethods();
    this.addListeners();

  }

  bindMethods(){
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  /**
   * addListeners
   */
  addListeners() {

    window.addEventListener( 'resize', this.onResize.bind(this) );
    TweenMax.ticker.addEventListener( 'tick', this.update.bind(this) )
    this.scene.renderer.view.addEventListener('mousemove', this.onMouseMove, false)

  }

  onMouseMove(event){
    this.emitter.setEmitPoint(event.clientX, event.clientY);
  }

  /**
   * update
   * - Triggered on every TweenMax tick
   */
  update() {

    this.DELTA_TIME = Date.now() - this.LAST_TIME;
    this.LAST_TIME = Date.now();

    this.emitter.update( this.DELTA_TIME );

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
