import React, { useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Hi');
  }, []);

  return (
    <div>
      <h2>{count === 0 ? 'CLICK BUTTON' : count}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCount((prev) => prev + 1);
        }}
      >
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
};

export default Home;
