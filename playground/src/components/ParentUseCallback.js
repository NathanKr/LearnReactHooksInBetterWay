import React, { useState, useCallback, useEffect, useMemo } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const ParentUseCallback = () => {
  const [clicks1, setClicks1] = useState(0);
  const [clicks2, setClicks2] = useState(0);

  const clickHandler1 = () => setClicks1(clicks1 + 1);
  const clickHandler2 = () => setClicks2(clicks2 + 1);

  const memoClickHandler1 = useCallback(clickHandler1, [clicks1]);
  const memoClickHandler2 = useCallback(clickHandler2, [clicks2]);

  useEffect(() => {
    console.log(clickHandler1 === memoClickHandler1);
    console.log(clickHandler2 === memoClickHandler2);
  });

  return (
    <div>
      <p>click1 : {clicks1}</p>
      <p>click2 : {clicks2}</p>
      {useMemo(
        () => (
          <ChildA clickHandler={memoClickHandler1} />
        ),
        [memoClickHandler1]
      )}
      {useMemo(
        () => (
          <ChildB clickHandler={memoClickHandler2} />
        ),
        [memoClickHandler2]
      )}
    </div>
  );
};

export default ParentUseCallback;
