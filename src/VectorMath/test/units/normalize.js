let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.normalize([]), []);
	assert.deepEqual(VectorMath.normalize([0, 0, 0, 0]), [0, 0, 0, 0]);
	assert.deepAlmostEqual(VectorMath.normalize([93, -69, -45, 86]), [0.61548926, -0.45665332, -0.29781739, 0.56916212]);
};
