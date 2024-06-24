let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.DirectionalMean();
	});
	assert.deepEqual(VectorMath.DirectionalMean([]), []);
	//assert.deepEqual(VectorMath.DirectionalMean([39, 4, 78, -92]), [39, 4, 78, -92]);
	//assert.deepEqual(VectorMath.DirectionalMean([11, -83, 11, -38], [11, -83, 11, -38]), [11, -83, 11, -38]);
	assert.deepAlmostEqual(VectorMath.DirectionalMean([23, -5, -63, -88], [88, -79, -94, 97], [-57, -45, -30, 80]), [14.97442365, -70.04472816, -107.45391481, 36.28325329]);
};
