import CosineSimilarity from './CosineSimilarity';

export default function(...args) {
	return 1 - CosineSimilarity(...args);
}
