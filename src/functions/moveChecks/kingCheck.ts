import {
	column,
	firstColumn,
	lastColumn,
	row,
	columnFinder,
	biggestSquare,
	hasOwnPiece
} from '../../global';
import type { Square } from '../../stores';
import { castlingCheck } from './castlingCheck';

export const kingCheck = (kingLoc: number, board: Square[], turn: string) => {
	const kingColumn = columnFinder(kingLoc);
	let kingArray = [];
	const allKingMoves = [
		kingLoc - column,
		kingLoc + column,
		kingLoc + row,
		kingLoc - row,
		kingLoc - row + 1,
		kingLoc + row + 1,
		kingLoc - row - 1,
		kingLoc + row - 1
	];
	let kingMovesOnBoard = [];

	kingMovesOnBoard = allKingMoves.filter((n) => n >= 0 && n < biggestSquare);

	if (kingColumn == firstColumn) {
		kingArray = kingMovesOnBoard.filter(
			(n) => columnFinder(n) !== lastColumn && !hasOwnPiece(board[n].piece, turn)
		);
	} else if (kingColumn == lastColumn) {
		kingArray = kingMovesOnBoard.filter(
			(n) => columnFinder(n) !== firstColumn && !hasOwnPiece(board[n].piece, turn)
		);
	} else {
		kingArray = kingMovesOnBoard.filter((n) => !hasOwnPiece(board[n].piece, turn));
	}
	const castleSquares = castlingCheck(board, turn);
	castleSquares?.forEach((n) => kingArray.push(n));
	return kingArray;
};
