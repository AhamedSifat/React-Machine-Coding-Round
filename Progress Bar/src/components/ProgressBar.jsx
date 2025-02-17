import PropTypes from 'prop-types';

function ProgressBar({ value }) {
  return (
    <>
      <div
        style={{
          height: '30px',
          width: '500px',
          backgroundColor: 'gray',
          borderRadius: '40px',
          overflow: 'hidden',
          position: 'relative',
          border: '2px solid black',
        }}
      >
        {/* Progress bar */}
        <div
          role='progressbar'
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value.toFixed()}
          style={{
            height: '100%',
            width: `${value}%`,
            backgroundColor: '#08077a',
            transition: 'width 0.05s ease-in-out',
          }}
        ></div>

        {/* Text Value */}
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: value > 49 ? 'white' : 'black',
            fontWeight: 'bold',
          }}
        >
          {value.toFixed()}%
        </span>
      </div>

      <div>
        {value === 100
          ? '🎉 Task Completed Successfully!'
          : '⏳ Loading... Please wait'}
      </div>
    </>
  );
}
ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ProgressBar;
