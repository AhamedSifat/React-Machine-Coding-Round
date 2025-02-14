const PersonalInfo = ({
  step,
  handleChange,

  input: { age, firstname, lastname },
}) => {
  const onInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(step, name, value);
  };
  return (
    <div className='form-section'>
      <h2>Personal Information</h2>
      <div className='form-group'>
        <label>First Name</label>
        <input
          type='text'
          name='firstname'
          value={firstname}
          onChange={onInputChange}
        />
      </div>
      <div className='form-group'>
        <label>Last Name</label>
        <input
          type='text'
          name='lastname'
          value={lastname}
          onChange={onInputChange}
        />
      </div>
      <div className='form-group'>
        <label>Age</label>
        <input type='number' name='age' value={age} onChange={onInputChange} />
      </div>
    </div>
  );
};

export default PersonalInfo;
