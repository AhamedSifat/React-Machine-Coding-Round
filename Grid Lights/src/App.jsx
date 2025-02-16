import Cell from './Cell';
import { useState } from 'react';

function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const [orders, setOrders] = useState([]);
  const [isDeactivate, setIsDeactivate] = useState(false);

  const deactivateCell = () => {
    setIsDeactivate(true);
    const timer = setInterval(() => {
      setOrders((prevOrdr) => {
        const newOrder = prevOrdr.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivate(false);
        }
        return newOrder;
      });
    }, 1000);
  };

  const activeCells = (index) => {
    const newOrders = !orders.includes(index) ? [...orders, index] : orders;
    setOrders(newOrders);

    const targetCount = config.flat(1).filter(Boolean).length;
    if (newOrders.length === targetCount) {
      deactivateCell();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '10px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          gridTemplateRows: 'repeat(3, 50px)',
        }}
      >
        {config.flat(1).map((data, index) => (
          <Cell
            key={index}
            data={data}
            handleClick={() => activeCells(index)}
            filled={orders.includes(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
