import React from 'react'

/**
 * This functional component is responsible for rendering the sunrise time
 * it takes the time stamp from the given data and switch it human time
 */
function Sunrise(props) {

    let time, hours, minutes;
    if (props.weather != null) {
        let d = props.weather.data.sys.sunrise;
        let date = new Date(d * 1000);
        hours = date.getHours();
        minutes = '0' + date.getMinutes();
        time = hours + ':' + minutes.substr(-2) + 'AM';
    } else {
        time = '-:--'
    }

    return (
        <span className='sunrise'>
            <p>Sun Rise</p>
            <p>{time}</p>
        </span>
    )
}

export default Sunrise;