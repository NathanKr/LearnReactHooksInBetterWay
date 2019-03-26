import React  from "react";
import CounterIncrementDecrement from './CounterIncrementDecrement'

const App = () => {
  return (
    <div style={{ margin: "10px" }}>
      <CounterIncrementDecrement initialState={{count:10}}/>
    </div>
  );
};

export default App;
