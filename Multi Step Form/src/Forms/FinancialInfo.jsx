const FinancialInfo = ({
  step,
  handleChange,
  input: { employmentStatus, annualIncome, bankName },
}) => {
  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    handleChange(step, name, value);
  };
  return (
    <div className='form-section'>
      <h2>Financial Information</h2>
      <div className='form-group'>
        <label>Employment Status</label>
        <select
          name='employmentStatus'
          onChange={onInputChange}
          value={employmentStatus}
        >
          <option>Select</option>
          <option value='employed'>Employed</option>
          <option value='unemployed'>Unemployed</option>
          <option value='student'>Student</option>
        </select>
      </div>
      <div className='form-group'>
        <label>Annual Income</label>
        <input
          type='number'
          name='annualIncome'
          value={annualIncome}
          onChange={onInputChange}
        />
      </div>
      <div className='form-group'>
        <label>Bank Name</label>
        <input
          type='text'
          name='bankName'
          value={bankName}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default FinancialInfo;
