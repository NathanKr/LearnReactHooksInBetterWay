import React , {useEffect} from 'react';

const Child1 = ({val}) => {
    useEffect(() => console.log("child1 render"));

    return (
        <div>
            <p>counter 1 : {val}</p>
        </div>
    );
};

export default Child1;