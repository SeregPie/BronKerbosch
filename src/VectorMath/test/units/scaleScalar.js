let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.scaleScalar([], 2, 12, -25, 7), []);
	assert.deepAlmostEqual(VectorMath.scaleScalar([34, -4, -30, -45], 2, 12, -25, 7), [77.4, -44.2, -127.4, -175.4]);
};
