import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function Otp({ otpLength }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(''));
  const otprefs = useRef([]);

  const handleOnChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return;
    }

    const newOtpFields = [...otpFields];
    newOtpFields[index] = value;
    setOtpFields(newOtpFields);

    if (value && index + 1 < otpFields.length)
      otprefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowLeft' && index > 0) {
      otprefs.current[index - 1].focus();
    } else if (e.key === 'ArrowRight' && index < otpLength - 1) {
      otprefs.current[index + 1].focus();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      const newOtpFields = [...otpFields];
      newOtpFields[index] = '';
      setOtpFields(newOtpFields);
      //
      if (index > 0) {
        otprefs.current[index - 1].focus();
      }
    } else if (e.key >= '0' && e.key <= '9') {
      e.preventDefault();
      const newOtpFields = [...otpFields];
      newOtpFields[index] = e.key;
      setOtpFields(newOtpFields);
      if (index < otpFields.length - 1) {
        otprefs.current[index + 1].focus();
      }
    }
  };

  useEffect(() => {
    otprefs.current['0'].focus();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {otpFields.map((value, index) => (
        <input
          onChange={(e) => handleOnChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(currentInput) => (otprefs.current[index] = currentInput)}
          style={{
            height: '50px',
            width: '50px',
            fontSize: '30px',
            textAlign: 'center',
          }}
          key={index}
          type='text'
          value={value}
          maxLength={1}
        />
      ))}
    </div>
  );
}
Otp.propTypes = {
  otpLength: PropTypes.number.isRequired,
};

export default Otp;
