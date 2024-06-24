let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.equal(VectorMath.PearsonCorrelationCoefficient([], []), 0);
	assert.equal(VectorMath.PearsonCorrelationCoefficient([-71, 8, -83, 53], [-71, 8, -83, 53]), 1);
	assert.almostEqual(VectorMath.PearsonCorrelationCoefficient([90, 21, -63, -99], [94, 36, -100, 40]), 0.59064865);
};
