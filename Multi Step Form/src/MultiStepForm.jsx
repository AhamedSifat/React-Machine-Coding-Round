import './MultiStepForm.css';
import { useState } from 'react';
import PersonalInfo from './Forms/PersonalInfo';
import ContactInfo from './Forms/ContactInfo';
import FinancialInfo from './Forms/FinancialInfo';
const pages = {
  step1: 1,
  step2: 2,
  step3: 3,
};

const formstatevalue = {
  step1: {
    firstname: '',
    lastname: '',
    age: '',
  },
  step2: {
    email: '',
    phone: '',
    address: '',
  },
  step3: {
    employmentStatus: '',
    annualIncome: '',
    bankName: '',
  },
};
const MultiStepForm = () => {
  const [currentForm, setCurrentForm] = useState(pages.step1);

  const [formData, setFormData] = useState(formstatevalue);

  const forms = {
    [pages.step1]: PersonalInfo,
    [pages.step2]: ContactInfo,
    [pages.step3]: FinancialInfo,
  };

  const CurrentComponent = forms[currentForm];

  const handleNextForm = (e) => {
    e.preventDefault();
    setCurrentForm((prev) => Math.min(prev + 1, pages.step3));
  };
  const handlePrevForm = (e) => {
    e.preventDefault();
    setCurrentForm((prev) => Math.max(prev - 1, pages.step1));
  };

  // Common handleChange function in parent
  const handleChange = (step, name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: {
        ...prevData[step],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedData = {
      ...formData.step1,
      ...formData.step2,
      ...formData.step3,
    };
    setFormData(formstatevalue);
    setCurrentForm(pages.step1);

    console.log(combinedData);
  };

  return (
    <div className='form-container'>
      <form className='form-sections' onSubmit={handleSubmit}>
        {/* Render the component dynamically */}
        <CurrentComponent
          step={`step${currentForm}`}
          handleChange={handleChange}
          setFormData={setFormData}
          input={formData[`step${currentForm}`]}
        />

        <div className='form-buttons'>
          <button
            hidden={currentForm === pages.step1}
            onClick={(e) => handlePrevForm(e)}
            className='submit-button'
          >
            Prev
          </button>
          <button
            hidden={currentForm === pages.step3}
            onClick={(e) => handleNextForm(e)}
            className='submit-button'
          >
            Next
          </button>

          {currentForm === pages.step3 && (
            <button type='submit' className='submit-button'>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
