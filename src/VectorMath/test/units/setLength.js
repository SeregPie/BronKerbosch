let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.deepEqual(VectorMath.setLength([], 95), []);
	assert.deepEqual(VectorMath.setLength([79, 51, -7, 61], 0), [0, 0, -0, 0]);
	assert.deepAlmostEqual(VectorMath.setLength([58, -57, -1, 27], 36), [24.36653246, -23.94641983, -0.42011263, 11.34304097]);
};
