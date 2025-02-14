// eslint-disable-next-line react/prop-types
const ContactInfo = ({
  step,
  handleChange,
  input: { email, phone, address },
}) => {
  const onInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(step, name, value);
  };

  return (
    <div className='form-section'>
      <h2>Contact Information</h2>
      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className='form-group'>
        <label>Phone</label>
        <input type='tel' name='phone' value={phone} onChange={onInputChange} />
      </div>
      <div className='form-group'>
        <label>Address</label>
        <input
          type='text'
          name='address'
          value={address}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
