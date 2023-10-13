import BronKerbosch from '@seregpie/bron-kerbosch';

import Array_prototype_max from './core/Array/prototype/max';
import Array_prototype_min from './core/Array/prototype/min';
import Array_prototype_remove from './core/Array/prototype/remove';
import Function_prototype_bindRecursive from './core/Function/prototype/bindRecursive';

export default (items, calcDistance) => {
	items = Array.from(items);
	{
		let cachedDistances = items.map(() => items.map(() => Infinity));
		{
			let {length} = items;
			for (let index0 = 0; index0 < length; index0++) {
				let value0 = items[index0];
				for (let index1 = index0 + 1; index1 < length; index1++) {
					let value1 = items[index1];
					let distance = calcDistance(value0, value1);
					cachedDistances[index0][index1] = distance;
					cachedDistances[index1][index0] = distance;
				}
			}
		}
		calcDistance = (cluster0, cluster1) => {
			cluster0 = [cluster0].flat(Infinity);
			cluster1 = [cluster1].flat(Infinity);
			return Array_prototype_min(
				cluster0.map((index0) => {
					return Array_prototype_min(
						cluster1.map((index1) => {
							return cachedDistances[index0][index1];
						}),
					);
				}),
			);
		};
	}
	let supCluster = items.map((value, index) => index);
	while (supCluster.length > 2) {
		let subClusters = [];
		{
			let minDistance = Infinity;
			let {length} = supCluster;
			for (let index0 = 0; index0 < length; index0++) {
				let subCluster0 = supCluster[index0];
				for (let index1 = index0 + 1; index1 < length; index1++) {
					let subCluster1 = supCluster[index1];
					let distance = calcDistance(subCluster0, subCluster1);
					if (distance < minDistance) {
						minDistance = distance;
						subClusters = [[index0, index1]];
					} else if (distance === minDistance) {
						subClusters.push([index0, index1]);
					}
				}
			}
		}
		subClusters = BronKerbosch(subClusters);
		let subCluster = Array_prototype_max(subClusters, ({length}) => length);
		if (subCluster.length === supCluster.length) {
			break;
		}
		subCluster = Array_prototype_remove(supCluster, subCluster);
		supCluster.push(subCluster);
	}
	return Function_prototype_bindRecursive((recur, array) => {
		return array.map((value) => {
			if (Array.isArray(value)) {
				return recur(value);
			}
			return items[value];
		});
	})(supCluster);
};
