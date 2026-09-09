import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center mb-5">
      <h2 className="text-primary mb-3">Counter : {count}</h2>
      <button
        className="btn btn-primary me-2"
        onClick={() => setCount(count + 1)}
      >
        Inc
      </button> 
      <button
        className="btn btn-danger me-2"
        onClick={() => setCount(count - 1)}
        
      >
        Dec
      </button>
      <button
        className="btn btn-warning me-2"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <button

        className="btn btn-success"
        onClick={() => setCount(count + 5)}
      >
        Inc By 5
      </button>
    </div>
  );
}

export default Counter;