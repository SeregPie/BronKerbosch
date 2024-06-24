let {assert} = require('chai');

let VectorMath = require('../../');

module.exports = function() {
	assert.throws(() => {
		VectorMath.min();
	});
	assert.deepEqual(VectorMath.min([]), []);
	assert.deepEqual(VectorMath.min([74, 21, -91, 37]), [74, 21, -91, 37]);
	assert.deepEqual(VectorMath.min([-76, -58, -40, -10], [94, -19, 8, 90], [-69, -79, -73, 28]), [-76, -79, -73, -10]);
};
