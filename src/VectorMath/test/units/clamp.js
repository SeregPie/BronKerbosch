let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.clamp([], [], []), []);
	assert.deepEqual(VectorMath.clamp([46, -12, 35], [-98, -46, -65], [2, -8, 33]), [2, -12, 33]);
};
