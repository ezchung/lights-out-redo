import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

interface BoardPropsInterface {
  nrows: number;
  ncols: number;
  chanceLightStartsOn: number;
}

interface flipCellInterface {
  y: number;
  x: number;
  boardCopy: boolean[][]
}

function Board({ nrows, ncols, chanceLightStartsOn }: BoardPropsInterface) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values

    for (let i=0; i < nrows; i++) {
      const col = [];
      for (let j=0; j < ncols; j++) {
        col.push(randomBoolean(chanceLightStartsOn));
      }
      initialBoard.push(col);
    }

    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
  }

  function flipCellsAround(coord:string) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y:number, x:number, boardCopy: boolean[][]) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      let copyBoard = JSON.parse(JSON.stringify(oldBoard));

      // TODO: in the copy, flip this cell and the cells around it
      //call flipCell 5 times
      flipCell(y,x,copyBoard);
      flipCell(y-1,x,copyBoard);
      flipCell(y+1,x,copyBoard);
      flipCell(y,x-1,copyBoard);
      flipCell(y,x+1,copyBoard);
      
      //return copyBoard
      // TODO: return the copy
      return copyBoard;
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board

  // TODO

  return (
    <table>
      {board.map(
        (row, i) =>
        <tr>
          {row.map(
            (bool, j) =>
            <Cell flipCellsAroundMe={() => {return flipCellsAround(`${i}-${j}`)}}
            isLit={bool}></Cell>
          )}
        </tr>)
      }
    </table>
  )
}


function randomBoolean(chanceLightStartsOn:number) {
  return Math.random() < chanceLightStartsOn;
}

export default Board;
