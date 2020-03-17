import React from 'react'

/**
 * This functional component is responsible for rendering the Feels like Temp
 * and it render the value either in C or F depends on the user choice
 */
function FeelsLike(props) {

    let feelsLike;
    if (props.weather != null && props.tempMeasure === true) {
        feelsLike = parseInt(props.weather.data.main.feels_like - 273.15) + '°C';
    } else if (props.weather != null && props.tempMeasure === false) {
        feelsLike = parseInt(((props.weather.data.main.feels_like - 273.15) * 9 / 5 + 32).toFixed(0)) + '°F';
    } else {
        feelsLike = '--'
    }

    return (
        <span className='feels-like'>
            <p>Feels Like</p>
            <p>{feelsLike}</p>
        </span>
    )
}

export default FeelsLike;