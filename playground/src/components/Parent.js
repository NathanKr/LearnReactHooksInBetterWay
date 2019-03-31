import React, { useState , useMemo } from "react";
import { Button } from "semantic-ui-react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [counter1, setCounter1] = useState(2);
  const [counter2, setCounter2] = useState(3);

  const child1Elem = useMemo(() => <Child1 val={counter1} /> ,[counter1])
  const child2Elem = useMemo(() => <Child2 val={counter2} /> ,[counter2])

  return (
    <div>
      <Button primary onClick={() => setCounter1(counter1 + 1)}>
        Increment 1
      </Button>
      <Button primary onClick={() => setCounter2(counter2 + 1)}>
        Increment 2
      </Button>
      {child1Elem}
      {child2Elem}
    </div>
  );
};

export default Parent;
