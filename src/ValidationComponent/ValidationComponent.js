import React from 'react';

const ValidationComponent = (props) => {

    let output = null;
    if(props.length < 5) {
        output = 'Text too short!'
    } else if(props.length > 15) {
        output = 'Text too long!'
    } else {
        output = props.length;
    }
    return(
        <p>{output}</p>
    )
}

export default ValidationComponent;