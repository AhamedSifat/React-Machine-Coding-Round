import Accordion from './Accordion';
import data from '../data.json';

function Faq() {
  console.log(data);
  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>FAQ's</h1>
      {data.faqs.map((d, index) => (
        <Accordion key={index} faq={d} />
      ))}
    </div>
  );
}

export default Faq;
