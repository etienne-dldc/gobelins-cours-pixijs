'use strict';

import Dat from 'dat-gui';

let setts = {
  nbrOfParticles : 200,
  particleSpeedMax: 5,
  particleSizeMax: 2
};

let gui = new Dat.GUI();
gui.add(setts, 'nbrOfParticles', 50, 1000);
gui.add(setts, 'particleSpeedMax', 0.5, 10);
gui.add(setts, 'particleSizeMax', 0.5, 10);

export default setts;
