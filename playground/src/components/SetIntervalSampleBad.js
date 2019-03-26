import React, { useState, useEffect } from "react";

const SetIntervalSampleBad = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      console.log("timer");
      setCounter(counter + 1);
    }, 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <p>counter : {counter}</p>
    </div>
  );
};

export default SetIntervalSampleBad;
