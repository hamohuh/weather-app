import React from 'react'

function WindSpeed(props) {
    //const windSpeed = props.weather != null ? parseFloat((props.weather.data.wind.speed * 3.6).toFixed(2)) + ' Km/H' : '--';

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