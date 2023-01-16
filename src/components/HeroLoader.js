import { useState, useEffect, useCallback } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, savedCallback]);
}

function HeroLoader() {
  let [percent, setPercent] = useState(0);

  useInterval(() => {
    if (percent < 100) {
      setPercent(percent + 1);
    } else {
      setPercent(0);
    }
  }, 3000);

  return (
    <p className='text-2xl sm:text-3xl font-bold my-auto lg:mx-12 uppercase'>Conquête du monde à {percent}%</p>
  );
}

export default HeroLoader;