import React from 'react'

function MinTemp(props) {

    let minTemp;
    if (props.weather != null && props.tempMeasure === true) {
        minTemp = parseInt(props.weather.data.main.temp_min - 273.15) + '°C';
    } else if (props.weather != null && props.tempMeasure === false) {
        minTemp = parseInt(((props.weather.data.main.temp_min - 273.15) * 9 / 5 + 32).toFixed(0)) + '°F';
    } else {
        minTemp = '--'
    }

    return (
        <span className='min-temp'>{minTemp}</span>
    )
}

export default MinTemp;