import React, { useState } from "react";
import Clock from "./Clock";

const App = () => {
  const [showClock, setShowClock] = useState(true);

  return (
    <div onClick={() => setShowClock(!showClock)} style={{ margin: "10px" }}>
      {showClock ? <Clock /> : ''}
    </div>
  );
};

export default App;
