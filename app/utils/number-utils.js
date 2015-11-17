const NumberUtils = {

  map( num, min1, max1, min2, max2 ) {

    let num1 = ( num - min1 ) / ( max1 - min1 )
    let num2 = ( num1 * ( max2 - min2 ) ) + min2

    return num2;

  },

  randomInt (min, max) {
    if (min == undefined) {
      return 0;
    }
    if (max == undefined) {
      var max = min;
      min  = 0;
    }
    return min + Math.floor(Math.random() * (max - min) );
  },

  hex2rgb( hex ) {
    hex = (hex.substr(0,1)=="#") ? hex.substr(1) : hex;
    return [parseInt(hex.substr(0,2), 16), parseInt(hex.substr(2,2), 16), parseInt(hex.substr(4,2), 16)];
  },

  /*
  * [0 - 255]
  */
  rgb2int(r, g, b) {
    let rhex = Math.floor(r);
    let ghex = Math.floor(g);
    let bhex = Math.floor(b);
    return bhex + (ghex * Math.pow(16, 2) ) + (rhex * Math.pow(16, 4) );
  },

  toRadians( degree ) {

    return degree * ( Math.PI / 180 );

  },

  toDegree( radians ) {

    return radians * ( 180 / Math.PI );

  }

};

export default NumberUtils;
