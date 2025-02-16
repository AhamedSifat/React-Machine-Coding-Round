function Cell({ data, handleClick, filled }) {
  return (
    <div
      onClick={handleClick}
      style={{
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
        color: 'black',
        visibility: data === 0 ? 'hidden' : 'visible',
        fontWeight: 'bold',
        cursor: 'pointer',
        backgroundColor: filled ? 'green' : '',
      }}
    ></div>
  );
}

export default Cell;
