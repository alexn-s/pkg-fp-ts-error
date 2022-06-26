

import * as E from 'fp-ts/Either';

/**
 *
 */
export const func = (bool: boolean) => {
	return bool ? E.right('heureka') : E.left(new Error('some error occured'));
};

(() => {
	console.log('🌠 start\n\n');

	const work = func(true);
	console.log('💻 > work', work);

	const errored = func(true);
	console.log('💻 > errored', errored);

	console.log('\n\n🚩 end');
})();
