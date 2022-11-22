import { useState, useEffect } from 'react';


function HeroLoader() {
  let [percent, setPercent] = useState(0);

  useEffect(() => {
    const intervalAnimation = setInterval(() => {
      if (percent < 100) {
        setPercent(percent + 1);
      } else {
        setPercent(0);
      }
    }, 3000);

    return () => {
      clearInterval(intervalAnimation);
    };
  });

  return (
    <p className='text-2xl sm:text-3xl font-bold my-auto lg:mx-12'>CONQUÊTE DU MONDE A {percent}%</p>
  );
}

export default HeroLoader;