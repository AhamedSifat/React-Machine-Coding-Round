import PropTypes from 'prop-types';

const Switch = ({ onToggle, isOn }) => {
  return (
    <div className='switch'>
      <label>
        <input
          type='checkbox'
          role='switch'
          aria-checked={isOn}
          checked={isOn}
          onChange={onToggle}
        />
        <span className='slider'></span>
        <span className='switch-lebel'>
          {isOn ? 'Dark Mode' : 'Light Mode'}
        </span>
      </label>
    </div>
  );
};

Switch.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isOn: PropTypes.bool.isRequired,
};

export default Switch;
