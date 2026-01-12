import { useState } from 'react';

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Counter</h1>
      <p className="text-4xl font-bold">Count: {count}</p>
      <button onClick={() => setCount(count - 1)} className="bg-red-500 text-white p-2 rounded-md cursor-pointer">
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)} className="text-white bg-blue-500  p-2 rounded-md cursor-pointer">
        Increment
      </button>
    </div>
  );
}

export default CounterPage;
