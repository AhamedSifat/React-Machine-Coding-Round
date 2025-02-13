// eslint-disable-next-line react/prop-types
function Circle({ clientX, clientY, color }) {
  return (
    <div
      style={{
        left: `${clientX}px`,
        top: `${clientY}px`,
        backgroundColor: color ?? 'red',
      }}
      className='circle-comp'
    ></div>
  );
}

export default Circle;
