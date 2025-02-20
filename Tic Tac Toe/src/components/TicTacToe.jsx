import Board from './Board';
import { useState } from 'react';
import checkWinner from '../../utils/checkWinner';
import PropTypes from 'prop-types';

const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from({ length: size }, () => {
      return Array(size).fill(null);
    })
  );

  const winner = checkWinner(board, size);
  const isBoardFull = board.every((row) => row.every((cell) => cell !== null));
  const [turnX, setTurnX] = useState(true);

  const status = winner
    ? `Winner is ${winner}`
    : isBoardFull
    ? 'No winner :)'
    : turnX
    ? 'Player X turn'
    : 'Player O turn';

  const handleClick = (i, j) => {
    if (board[i][j] || winner) {
      return;
    }
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[i][j] = turnX ? 'X' : 'O';
    setTurnX((prev) => !prev);
    setBoard(newBoard);
  };

  const handleReset = () => {
    setBoard(
      Array.from({ length: size }, () => {
        return Array(size).fill(null);
      })
    );
  };
  return (
    <div className='container'>
      <Board size={size} board={board} onClick={handleClick} />
      <div className='status'>{status}</div>
      <button onClick={handleReset} className='reset'>
        Reset
      </button>
    </div>
  );
};

TicTacToe.propTypes = {
  size: PropTypes.number,
};

export default TicTacToe;
