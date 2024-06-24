let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.equal(VectorMath.length([]), 0);
	assert.equal(VectorMath.length([0, 0, 0, 0]), 0);
	assert.almostEqual(VectorMath.length([27, 46, 54, 9]), 76.43297718);
};
