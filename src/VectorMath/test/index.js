let chai = require('chai');
chai.use(require('chai-stats'));

let units = require('./units');

for (let unit of units) {
	unit();
}
