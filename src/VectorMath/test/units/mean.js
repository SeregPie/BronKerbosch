let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.mean();
	});
	assert.deepEqual(VectorMath.mean([]), []);
	//assert.deepEqual(VectorMath.mean([-4, 46, 95, 75]), [-4, 46, 95, 75]);
	//assert.deepEqual(VectorMath.mean([40, 1, -22, 32], [40, 1, -22, 32]), [40, 1, -22, 32]);
	assert.deepAlmostEqual(VectorMath.mean([58, 31, -39, -7], [82, 72, -20, 19], [-38, 77, -33, 57]), [34, 60, -30.66666667, 23]);
};
