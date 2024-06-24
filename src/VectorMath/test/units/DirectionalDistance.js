let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.equal(VectorMath.DirectionalDistance([], []), 0);
	assert.equal(VectorMath.DirectionalDistance([-33, 97, -86, 57], [-33, 97, -86, 57]), 0);
	assert.almostEqual(VectorMath.DirectionalDistance([33, -7, 63, -73], [19, -82, 40, 19]), 133.37255891);
};
