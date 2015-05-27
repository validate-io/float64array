'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS FLOAT64ARRAY //

/**
* FUNCTION: isFloat64Array( value )
*	Validates if a value is a Float64Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a Float64Array
*/
function isFloat64Array( value ) {
	return isStr.call( value ) === '[object Float64Array]';
} // end FUNCTION isFloat64Array()


// EXPORTS //

module.exports = isFloat64Array;
