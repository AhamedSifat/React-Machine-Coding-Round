import TrafficLight from './components/TrafficLight';

function App() {
  const TrafficLights = [
    {
      color: 'red',
      time: 2000, // 4sec
      order: 4,
      displayOrder: 3,
    },
    {
      color: 'yellow',
      time: 1000, // 4sec
      order: 3,
      displayOrder: 2,
    },
    {
      color: 'green',
      time: 2000, // 4sec
      order: 1,
      displayOrder: 1,
    },
    {
      color: 'aqua',
      time: 1000, // 4sec
      order: 2,
      displayOrder: 4,
    },
    {
      color: 'purple',
      time: 400, // 4sec
      order: 5,
      displayOrder: 5,
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <TrafficLight TrafficLights={TrafficLights} />
    </div>
  );
}

export default App;
