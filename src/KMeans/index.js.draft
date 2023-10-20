import VectorMath from '@seregpie/vector-math';
import JustMyLuck from 'just-my-luck';

import Array_ofLength from './@core/Array/ofLength';
import Array_prototype_indexOfMin from './@core/Array/prototype/indexOfMin';
import Function_identity from './@core/Function/identity';

let f = Object.assign(
	function (
		rawValues,
		rawMeans,
		{
			distance: calculateDistance = f.distance,
			map = f.map,
			maxIterations = f.maxIterations,
			mean: calculateMean = f.mean,
			random = f.random,
		} = {},
	) {
		let b = Number.isFinite(rawMeans);
		let clustersCount;
		if (b) {
			clustersCount = rawMeans;
		} else {
			rawMeans = Array.from(rawMeans);
			clustersCount = rawMeans.length;
		}
		if (!clustersCount) {
			return [];
		}
		rawValues = Array.from(rawValues);
		if (clustersCount === 1) {
			return [rawValues];
		}
		let luck = new JustMyLuck(random);
		let values = rawValues.map(map);
		let means;
		if (b) {
			means = luck.pickCombination(values, clustersCount);
		} else {
			means = rawMeans.map(map);
		}
		let assignments = [];
		for (let i = 0; i < maxIterations; i++) {
			let converged = true;
			values.forEach((value, valueIndex) => {
				let clusterIndex = Array_prototype_indexOfMin(means, (mean) =>
					calculateDistance(value, mean),
				);
				if (clusterIndex !== assignments[valueIndex]) {
					assignments[valueIndex] = clusterIndex;
					converged = false;
				}
			});
			if (converged) {
				break;
			}
			let clusters = Array_ofLength(clustersCount).map(() => []);
			assignments.forEach((clusterIndex, valueIndex) => {
				clusters[clusterIndex].push(values[valueIndex]);
			});
			means = means.map((mean, clusterIndex) => {
				let cluster = clusters[clusterIndex];
				if (cluster.length) {
					mean = calculateMean(...cluster);
				} else {
					// handle empty cluster
				}
				return mean;
			});
		}
		let rawClusters = Array_ofLength(clustersCount).map(() => []);
		assignments.forEach((clusterIndex, valueIndex) => {
			rawClusters[clusterIndex].push(rawValues[valueIndex]);
		});
		return rawClusters;
	},
	{
		distance: VectorMath.distance,
		map: Function_identity,
		maxIterations: 1024,
		mean: VectorMath.mean,
		random: Math.random,
	},
);

export default f;
