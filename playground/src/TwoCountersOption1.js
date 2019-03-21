import React , {useState} from 'react';
import {Button} from 'semantic-ui-react' 

const TwoCountersOption1 = () => {
    const [counter1,setCounter1] = useState(2);
    const [counter2,setCounter2] = useState(3);

    return (
        <div >
            <Button primary onClick={() => setCounter1(counter1+1)}>Increment</Button>
            <p>counter 1 : {counter1}</p>
            <Button primary onClick={() => setCounter2(counter2+1)}>Increment</Button>
            <p>counter 2 : {counter2}</p>
        </div>
    );
};

export default TwoCountersOption1;