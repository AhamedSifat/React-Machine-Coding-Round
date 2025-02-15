import Pagination from './pagination/Pagination';

const data = Array.from(
  { length: 100 },
  (_, index) => `Product No: ${index + 1}`
);

function App() {
  return <Pagination data={data} />;
}

export default App;
