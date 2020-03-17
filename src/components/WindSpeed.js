import React from 'react'

/**
 * This functional component is responsible for rendering the Wind Speed
 * and it render the value either in KM/H or Mph depends on the user choice
 */
function WindSpeed(props) {

    let windSpeed;
    if (props.weather != null && props.tempMeasure === true) {
        windSpeed = parseFloat((props.weather.data.wind.speed * 3.6).toFixed(2)) + ' Km/H';
    } else if (props.weather != null && props.tempMeasure === false) {
        windSpeed = ((props.weather.data.wind.speed * 3.6) / 1.609).toFixed(2) + ' Mph';
    } else {
        windSpeed = '--'
    }

    return (
        <span className='wind-speed'>
            <p>Wind Speed</p>
            <p>{windSpeed}</p>
        </span>
    )
}

export default WindSpeed;