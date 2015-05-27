'use strict';

var isFloat64Array = require( './../lib' );

console.log( isFloat64Array( new Float64Array( 10 ) ) );
// returns true

console.log( isFloat64Array( new Int8Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Uint8Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Uint8ClampedArray( 10 ) ) );
// returns false

console.log( isFloat64Array( new Int16Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Uint16Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Int32Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Uint32Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Float32Array( 10 ) ) );
// returns false

console.log( isFloat64Array( new Array( 10 ) ) );
// returns false

console.log( isFloat64Array( {} ) );
// returns false

console.log( isFloat64Array( null ) );
// returns false
