import React, { useReducer } from "react";
import { Button } from "semantic-ui-react";
import counterReducer from './counterReducer'

const CounterIncrementDecrement = ({ initialState }) => {
  const [state, dispatch] = useReducer(counterReducer , initialState);

  return (
    <div>
      <Button onClick={() => dispatch({type : 'increment'})} primary>
        Increment
      </Button>
      <Button onClick={() => dispatch({type : 'decrement'})} primary>
        Decrement
      </Button>
      <p>counter : {state.count}</p>
    </div>
  );
};

export default CounterIncrementDecrement;
