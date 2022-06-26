import * as E from 'fp-ts/Either';

export const func = (bool: boolean) => {
	return bool ? E.right('heureka') : E.left(new Error('some error occured'));
};

(() => {
	console.log('start\n\n');

	const work = func(true);
	console.log('right: ', work);

	const errored = func(true);
	console.log('left: ', errored);

	console.log('\n\nend');
})();
