import { useState } from 'react';

export function Counter({ initialCount = 0, onIncrement }) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(c => c + 1);
    onIncrement?.();
  };

  return (
    <div className="Counter">
      <span className="Counter-count">Count: {count}</span>
      <button className="Counter-btn" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}