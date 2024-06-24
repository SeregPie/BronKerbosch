let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.scaleLength([], 15, 45, -26, -20), []);
	assert.deepAlmostEqual(VectorMath.scaleLength([73, -79, -93, -42], 15, 45, -26, -20), [0.32167122, -0.34810995, -0.40980032, -0.18507111]);
};
