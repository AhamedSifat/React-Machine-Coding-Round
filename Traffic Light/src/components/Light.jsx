import PropTypes from 'prop-types';

function Light({ color, activeLight }) {
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: `${color}`,
        opacity: activeLight === color ? '2' : '0.05',
      }}
    ></div>
  );
}

Light.propTypes = {
  color: PropTypes.string.isRequired,
  activeLight: PropTypes.string.isRequired,
};

export default Light;
