export default (items, centers, calcDistance, calcCenter, options) => {
	if (centers > 0) {
	}
	return [];
};

let f = Object.assign(function (
	rawValues,
	clustersCount,
	{
		distance: calculateDistance = f.distance,
		map = f.map,
		maxIterations = f.maxIterations,
		mean: calculateMean = f.mean,
		random = f.random,
	} = {},
) {
	if (!clustersCount) {
		return [];
	}
	let options = {
		distance: calculateDistance,
		map,
		maxIterations,
		mean: calculateMean,
		random,
	};
	rawValues = Array.from(rawValues);
	if (clustersCount === rawValues.length) {
		return KMeans(rawValues, rawValues, options);
	}
	if (clustersCount > rawValues.length) {
		return KMeans(rawValues, clustersCount, options);
	}
	let values = rawValues.map(map);
	let indexedMeanCandidates = values.map((v, i) => i);
	let luck = new JustMyLuck(random);
	let index = luck.pick(indexedMeanCandidates);
	let indexedMeans = indexedMeanCandidates.splice(index, 1);
	while (indexedMeans.length < clustersCount) {
		let index = luck.pickWeighted(
			indexedMeanCandidates.map((i, index) => {
				let meanCandidate = values[i];
				let distance = Array_prototype_min(
					indexedMeans.map((i) => {
						let mean = values[i];
						return calculateDistance(meanCandidate, mean);
					}),
				);
				return [index, Math.pow(distance, 2)];
			}),
		);
		let [i] = indexedMeanCandidates.splice(index, 1);
		indexedMeans.push(i);
	}
	let rawMeans = indexedMeans.map((i) => rawValues[i]);
	return KMeans(rawValues, rawMeans, options);
}, KMeans);
