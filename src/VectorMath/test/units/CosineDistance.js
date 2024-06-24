let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.equal(VectorMath.CosineDistance([], []), 1);
	assert.equal(VectorMath.CosineDistance([-86, -53, 60, -41], [-86, -53, 60, -41]), 0);
	assert.almostEqual(VectorMath.CosineDistance([58, -1, -99, -14], [69, 2, -35, 75]), 0.48506629);
};
