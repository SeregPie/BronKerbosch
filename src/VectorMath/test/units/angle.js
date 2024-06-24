let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.almostEqual(VectorMath.angle([], []), 1.570796327);
	assert.equal(VectorMath.angle([62, -67, 23, -13], [62, -67, 23, -13]), 0);
	assert.almostEqual(VectorMath.angle([-95, 15, -37, 14], [-46, 34, -16, -34]), 0.79267699);
};
