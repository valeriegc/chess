import { allowedSquares } from '../../stores';
import {
	column,
	firstColumn,
	lastColumn,
	row,
	columnFinder,
	smallestSquare,
	biggestSquare
} from '../../global';

export const kingCheck = (targetSquare: number) => {
	const tempArray: number[] = [];
	const columnNumber = columnFinder(targetSquare);

	switch (columnNumber) {
		case firstColumn:
			tempArray.push(targetSquare + column, targetSquare - row, targetSquare + row);
			break;
		case lastColumn:
			tempArray.push(targetSquare - column, targetSquare - row, targetSquare + row);
			break;
		default:
			tempArray.push(
				targetSquare - column,
				targetSquare + column,
				targetSquare + row,
				targetSquare - row
			);
	}
	return tempArray.filter((n) => n > smallestSquare && n < biggestSquare);
};