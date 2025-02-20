import PropTypes from 'prop-types';

const Board = ({ size, board, onClick }) => {
  return (
    <div
      className='board'
      style={{
        gridTemplateColumns: `repeat(${size}, 100px)`,
        justifyContent: 'center',
      }}
    >
      {board.map((row, rowNo) => {
        return row.map((cell, colNo) => {
          return (
            <div
              onClick={() => onClick(rowNo, colNo)}
              key={`${rowNo}-${colNo}`}
              name={`${rowNo}-${colNo}`}
              className='cell'
            >
              {cell}
            </div>
          );
        });
      })}
    </div>
  );
};

Board.propTypes = {
  size: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(PropTypes.array).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
