import { useState } from 'react';
import PropTypes from 'prop-types';

function Tabs({ tabsData }) {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div>
      {tabsData.map((data, index) => (
        <button
          onClick={() => setCurrentTab(index)}
          style={{
            border: '2px solid black',
            marginLeft: '3px',
            padding: '4px',
            cursor: 'pointer',
            backgroundColor: currentTab === index ? 'lightblue' : 'white',
          }}
          key={index}
        >
          {data.label}
        </button>
      ))}

      <div
        style={{
          height: '500px',
          width: '100%',
          border: '1px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px',
          fontSize: '2rem',
        }}
      >
        {tabsData[currentTab]?.content}
      </div>
    </div>
  );
}
Tabs.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Tabs;
