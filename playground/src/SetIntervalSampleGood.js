import React, { useState, useEffect, useRef } from "react";

const SetIntervalSampleGood = () => {
  const [counter, setCounter] = useState(0);

  const counterRef = useRef();

  useEffect(() => {
    counterRef.current = counter;
  });

  useEffect(() => {
    const handle = setInterval(() => {
      console.log("timer");
      setCounter(counterRef.current + 1);
    }, 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <p>counter : {counter}</p>
    </div>
  );
};

export default SetIntervalSampleGood;
