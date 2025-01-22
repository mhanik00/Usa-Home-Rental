import { useEffect, useState } from 'react';

export default function CountUpAnimation({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const steps = 60;
  const increment = value / steps;

  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(currentCount);
      }
    }, duration * 1000 / steps);

    return () => clearInterval(interval);
  }, [value, duration, increment]);

  return Math.round(count).toLocaleString();
}
