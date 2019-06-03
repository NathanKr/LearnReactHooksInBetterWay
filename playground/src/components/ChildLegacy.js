import React, { PureComponent } from 'react';
import {Button} from 'semantic-ui-react'

class ChildLegacy extends PureComponent {
    render() {
        console.log('render ChildLegacy');
        return (
            <div>
                <Button onClick={this.props.clickHandler} inverted color='orange'>Increment counter</Button>
            </div>
        );
    }
}



export default ChildLegacy;