import { allowedSquares } from '../../stores';
import { columnFinder, column } from '../../global';

export const horseCheck = (targetSquare: number) => {
	const startColumnNumber = columnFinder(targetSquare);

	const plusOneRow = [-15, 17];
	const plusTwoRow = [-6, 10];
	const minusOneRow = [-17, 15];
	const minusTwoRow = [6, -10];
	const tempArray: number[] = [];

	plusOneRow.map((n) =>
		columnFinder(targetSquare + n) == startColumnNumber + column
			? tempArray.push(targetSquare + n)
			: n
	);
	plusTwoRow.map((n) =>
		columnFinder(targetSquare + n) == startColumnNumber + 2 * column
			? tempArray.push(targetSquare + n)
			: n
	);
	minusOneRow.map((n) =>
		columnFinder(targetSquare + n) == startColumnNumber - column
			? tempArray.push(targetSquare + n)
			: n
	);
	minusTwoRow.map((n) =>
		columnFinder(targetSquare + n) == startColumnNumber - 2 * column
			? tempArray.push(targetSquare + n)
			: n
	);

	return tempArray.filter((n) => n > 0 && n < 65);
};
