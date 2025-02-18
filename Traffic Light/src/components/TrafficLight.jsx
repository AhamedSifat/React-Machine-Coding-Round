import Light from './Light';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function TrafficLight({ TrafficLights }) {
  const sortedTrafficLights_display = [...TrafficLights].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
  const sortedTrafficLights_order = [...TrafficLights].sort(
    (a, b) => a.order - b.order
  );

  const [activeLight, setActiveLight] = useState(sortedTrafficLights_order[0]);

  useEffect(() => {
    setTimeout(() => {
      const currentLightIndex = sortedTrafficLights_order.findIndex(
        (l) => l.color === activeLight.color
      );
      const nextLightIndex = currentLightIndex + 1;
      const nextLight =
        sortedTrafficLights_order[nextLightIndex] ??
        sortedTrafficLights_order[0];
      setActiveLight(nextLight);
    }, activeLight.time);
  }, [activeLight]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: '100px',
        backgroundColor: '#ededed',
        alignItems: 'center',
        borderRadius: '20px',
        padding: '12px 0',
      }}
    >
      {sortedTrafficLights_display.map((light, index) => (
        <Light
          key={index}
          color={light.color}
          activeLight={activeLight.color}
        />
      ))}
    </div>
  );
}

TrafficLight.propTypes = {
  TrafficLights: PropTypes.arrayOf(
    PropTypes.shape({
      displayOrder: PropTypes.number.isRequired,
      order: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrafficLight;
