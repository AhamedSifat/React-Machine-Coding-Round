import PropTypes from 'prop-types';
import { useState, memo } from 'react';

function Item({ data, handleDelete, handleComplete, updateTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [udpatedValue, setUpdatedValue] = useState(data.value);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {isEdit ? (
        <input
          style={{
            width: '300px',
            height: '35px',
            fontSize: '16px',
            padding: '8px',
            marginRight: '10px',
            boxSizing: 'border-box',
            border: '1px solid black',
          }}
          type='text'
          value={udpatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateTodo(data.id, udpatedValue);
              setIsEdit(!isEdit);
            }
          }}
        />
      ) : (
        <p
          style={{ textDecoration: data.isCompleted ? 'line-through' : 'none' }}
        >
          {data.value}
        </p>
      )}

      <div>
        <button
          onClick={() => handleComplete(data.id)}
          style={{
            backgroundColor: data.isCompleted ? 'blue' : 'green',
            color: 'white',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          ✔
        </button>
        <button
          onClick={() => handleDelete(data.id)}
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '8px 14px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          ✘
        </button>
        {!isEdit && !data.isCompleted && (
          <button
            onClick={() => setIsEdit(!isEdit)}
            style={{
              color: 'white',
              border: 'none',
              padding: '8px 9px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '10px',
            }}
          >
            📝
          </button>
        )}
      </div>
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default memo(Item);
