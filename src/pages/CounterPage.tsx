import { useState } from 'react';

function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Counter</h1>
      <p className="text-4xl font-bold">Count: {count}</p>
      <button onClick={() => setCount(count - 1)} className="cursor-pointer rounded-md bg-red-500 p-2 text-white">
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)} className="cursor-pointer rounded-md bg-blue-500 p-2 text-white">
        Increment
      </button>
    </div>
  );
}

export default CounterPage;
