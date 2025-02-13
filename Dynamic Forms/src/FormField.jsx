import PropTypes from 'prop-types';

const FormField = ({ field, index, handleChange, error }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label
        style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}
      >
        {field.label}:
      </label>
      <input
        type={field.type}
        name={field.name}
        value={field.type === 'checkbox' ? undefined : field.value}
        checked={field.type === 'checkbox' ? field.value : undefined}
        onChange={(e) => handleChange(e, index)}
        style={{
          padding: '0.5rem',
          width: '100%',
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}
      />
      {error && (
        <span style={{ color: 'red', fontSize: '0.875rem' }}>{error}</span>
      )}
    </div>
  );
};
FormField.propTypes = {
  field: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default FormField;
