import React from 'react';

/**
 * This Functional Component returns a button if we enter a valid city
 * this button is responsible for switching the tempMeasure in the App state
 * between false and true so we can use its value to set the measure to C or F
 */
function SwitchTemp(props) {

    let handleClick = (e) => {
        e.preventDefault();
        props.toggleTemp();
    }

    let temp = props.tempMeasure === true ? 'F' : 'C';
    let button = (props.weather == null) ? '' : <button className='toggle' onClick={handleClick}>{temp}</button>

    return (
        <span>{button}</span>
    );

}

export default SwitchTemp;