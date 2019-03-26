import React, { useState } from "react";
import { Button } from "semantic-ui-react";

const TwoCountersOption2 = () => {
  const [{ counter1, counter2 }, setCounters] = useState({
    counter1: 12,
    counter2: 13
  });

  return (
    <div>
      <Button
        primary
        onClick={() =>
          setCounters({ counter1: counter1 + 1, counter2: counter2 })
        }
      >
        Increment
      </Button>
      <p>counter 1 : {counter1}</p>
      <Button
        primary
        onClick={() =>
          setCounters({ counter1: counter1, counter2: counter2 + 1 })
        }
      >
        Increment
      </Button>
      <p>counter 2 : {counter2}</p>
    </div>
  );
};

export default TwoCountersOption2;
