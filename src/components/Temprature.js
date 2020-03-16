import React from 'react'

function Temprature(props) {

    let temp;
    if (props.weather != null && props.tempMeasure === true) {
        temp = parseInt(props.weather.data.main.temp - 273.15) + '°C';
    } else if (props.weather != null && props.tempMeasure === false) {
        temp = parseInt(((props.weather.data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)) + '°F';
    } else {
        temp = '--'
    }

    return (
        <p className='main-temprature'>{temp}</p>
    )
}

export default Temprature;