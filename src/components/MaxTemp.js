import React from 'react'

/**
 * This functional component is responsible for rendering the Maximum Temp
 * and it render the value either in C or F depends on the user choice
 */
function MaxTemp(props) {

    let maxTemp;
    if (props.weather != null && props.tempMeasure === true) {
        maxTemp = parseInt(props.weather.data.main.temp_max - 273.15) + '°C';
    } else if (props.weather != null && props.tempMeasure === false) {
        maxTemp = parseInt(((props.weather.data.main.temp_max - 273.15) * 9 / 5 + 32).toFixed(0)) + '°F';
    } else {
        maxTemp = '--'
    }

    return (
        <span className='max-temp'>{maxTemp}</span>
    )
}

export default MaxTemp;