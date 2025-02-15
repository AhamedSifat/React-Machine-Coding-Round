import PropTypes from 'prop-types';
import { useState } from 'react';

const PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
const MAX_BUTTONS_DISPLAY = 5;

function Pagination({ data, pageSize = PAGE_SIZE }) {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const totalPages = Math.ceil(data.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data.slice(startIndex, endIndex);

  const pageNumbersButton = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  let buttonStartIndex = currentPage - Math.floor(MAX_BUTTONS_DISPLAY / 2);
  let buttonEndIndex = currentPage + Math.floor(MAX_BUTTONS_DISPLAY / 2);

  if (buttonStartIndex < 1) {
    buttonStartIndex = 1;
    buttonEndIndex = Math.min(totalPages, MAX_BUTTONS_DISPLAY);
  }

  if (buttonEndIndex > totalPages) {
    buttonEndIndex = totalPages;
    buttonStartIndex = Math.max(1, totalPages - MAX_BUTTONS_DISPLAY + 1);
  }

  const buttonToDisplay = pageNumbersButton.slice(
    buttonStartIndex - 1,
    buttonEndIndex
  );

  const handleFirst = () => {
    setCurrentPage(1);
  };

  const handleLast = () => {
    setCurrentPage(totalPages);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        {paginatedData.map((d, i) => (
          <div
            key={i}
            style={{
              background: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s ease-in-out',
              cursor: 'default',
              width: '100px',
              height: '100px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {d}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          margin: '0 auto',
        }}
      >
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          style={{
            background: currentPage === 1 ? '#cccccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          First
        </button>
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          style={{
            background: currentPage === 1 ? '#cccccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          Previous
        </button>

        {buttonToDisplay.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            disabled={currentPage === number}
            style={{
              background: currentPage === number ? '#007bff' : '#f9f9f9',
              color: currentPage === number ? '#fff' : '#000',
              border: '1px solid #007bff',
              borderRadius: '5px',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          style={{
            background: currentPage === totalPages ? '#cccccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          Next
        </button>
        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          style={{
            background: currentPage === totalPages ? '#cccccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          Last
        </button>
      </div>
      <div
        style={{
          fontSize: '18px',
          fontWeight: '500',
          marginTop: '32px',
        }}
      >
        Page {currentPage} of {totalPages}
      </div>
    </div>
  );
}

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  pageSize: PropTypes.number,
};

export default Pagination;
