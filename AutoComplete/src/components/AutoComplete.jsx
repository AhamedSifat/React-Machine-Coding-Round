import { useState, useEffect, useRef } from 'react';

const inputStyle = {
  padding: '10px',
  border: '2px solid #ccc',
  width: '100%',
  boxSizing: 'border-box',
};

const STATE = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};
function AutoComplete() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATE.LOADING);
  const [show, setShow] = useState(false);
  const cache = useRef({});

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setStatus(STATE.LOADING);
        if (cache.current[query]) {
          setData(cache.current[query]);
          setStatus(STATE.SUCCESS);
          return;
        }

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
          { signal }
        );
        const value = await res.json();
        cache.current[query] = value.products;
        setData(value.products);
        setStatus(STATE.SUCCESS);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus(STATE.ERROR);
        }
      }
    };
    const timer = setTimeout(fetchData, 500);

    return () => {
      clearInterval(timer);
      abortController.abort();
    };
  }, [query]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        marginTop: '30px',
        width: '500px',
        margin: '0 auto',
      }}
    >
      <input
        type='text'
        style={inputStyle}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      {status === STATE.LOADING && show && (
        <div style={{ marginTop: '8px', textAlign: 'center' }}>...Loading</div>
      )}

      {status === STATE.ERROR && show && <div>Error Occured</div>}

      {status === STATE.SUCCESS && show && (
        <>
          {data.length === 0 ? (
            <div style={{ marginTop: '8px', textAlign: 'center' }}>
              No results found
            </div>
          ) : (
            <ul
              style={{
                padding: '0px',
                width: '100%',
                border: '2px solid black',
                boxSizing: 'border-box',
                height: '400px',
                overflow: 'scroll',
              }}
            >
              {data.map((item) => (
                <li
                  key={item.id}
                  style={{
                    listStyle: 'none',
                    padding: '7px 4px',
                    border: '1px solid black',
                  }}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default AutoComplete;
