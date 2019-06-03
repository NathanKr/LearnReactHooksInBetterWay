import React, { useState, useCallback } from "react";
import { Button } from "semantic-ui-react";
import ChildLegacy from "./ChildLegacy";

const ParentUseCallbackNew = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div>
      <Button inverted color="blue" onClick={() => setCounter1(counter1 + 1)}>
        Increment counter 1
      </Button>
      <ChildLegacy
        clickHandler={useCallback(() => setCounter2(counter2 + 1), [counter2])}
      />
      <p>counter1 : {counter1}</p>
      <p>counter2 : {counter2}</p>
    </div>
  );
};

export default ParentUseCallbackNew;
