import React, { useReducer, useEffect } from "react";
import counterReducer from '../reducers/counterReducer'

const SetIntervalSampleWithUseReducer = () => {
  const initialState = {count : 0};
  const [{count}, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    const handle = setInterval(() => {
      console.log("timer");
      dispatch({ type: "increment" });
    }, 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <p>counter : {count}</p>
    </div>
  );
};

export default SetIntervalSampleWithUseReducer;
