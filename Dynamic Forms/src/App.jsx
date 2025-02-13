import { useState } from 'react';
import FormField from './FormField';

const DynamicForm = () => {
  const initialFields = [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
      value: '',
      required: true,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: 'text',
      value: '',
      required: true,
    },
    { label: 'Email', name: 'email', type: 'email', value: '', required: true },
    {
      label: 'Accept Terms & Conditions',
      name: 'accepted',
      type: 'checkbox',
      value: false,
      required: true,
    },
  ];

  const [fields, setFields] = useState(initialFields);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFields(newFields);
  };

  const validateForm = () => {
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !field.value) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const formData = {};
      fields.forEach((field) => (formData[field.name] = field.value));

      setFields(initialFields);
      setErrors({});
      setIsSubmitting(false);
    }, 2000);
  };

  const handleReset = () => {
    setFields(initialFields);
    setErrors({});
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '2rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Dynamic Form
      </h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <FormField
            key={field.name}
            field={field}
            index={index}
            handleChange={handleChange}
            error={errors[field.name]}
          />
        ))}
        <button
          type='submit'
          disabled={isSubmitting}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: isSubmitting ? '#6c757d' : '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            marginRight: '1rem',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        <button
          type='button'
          onClick={handleReset}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
