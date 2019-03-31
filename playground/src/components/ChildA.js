import React , {useEffect} from 'react';
import {Button} from 'semantic-ui-react'

const ChildA = ({clickHandler}) => {
    useEffect(() => console.log('render childA'))
    return (
        <div>
            <Button inverted color='orange' onClick={clickHandler}>Click1</Button>
        </div>
    );
};

export default ChildA;