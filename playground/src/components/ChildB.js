import React , {useEffect} from 'react';
import {Button} from 'semantic-ui-react'


const ChildB = ({clickHandler}) => {
    useEffect(() => console.log('render childB'))
    return (
        <div>
             <Button inverted color='blue' onClick={clickHandler}>Click2</Button>
        </div>
    );};

export default ChildB;