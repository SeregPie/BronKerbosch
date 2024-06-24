let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.scale([], [], [], [], []), []);
	assert.deepAlmostEqual(VectorMath.scale([-25, -5, -16], [26, -52, -25], [98, -51, 98], [-99, 11, 9], [16, 41, 33]), [-180.45833333, 1421, 10.75609756]);
};
