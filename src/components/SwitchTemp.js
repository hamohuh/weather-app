import React from 'react';

function SwtchTemp(props) {

    let handleClick = (e) => {
        e.preventDefault();
        props.toggleTemp()
    }

    let temp = props.tempMeasure === true ? 'F' : 'C';
    let button = (props.weather == null) ? '' : <button className='toggle' onClick={handleClick}>{temp}</button>

    return (
        <span>{button}</span>
    );

}

export default SwtchTemp;