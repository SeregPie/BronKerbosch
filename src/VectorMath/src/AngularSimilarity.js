import AngularDistance from './AngularDistance';

export default function(...args) {
	return 1 - AngularDistance(...args);
}
