let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.clampLength([], -95, -49), []);
	assert.deepAlmostEqual(VectorMath.clampLength([79, -89, -29, 99], -95, -49), [-24.57889249, 27.69014471, 9.02263142, -30.80139692]);
};
