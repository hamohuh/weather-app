import React from 'react'

function Sunset(props) {

    let time, hours, minutes;
    if (props.weather != null) {
        let d = props.weather.data.sys.sunset;
        let date = new Date(d * 1000);
        hours = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours();
        minutes = '0' + date.getMinutes();
        time = hours + ':' + minutes.substr(-2) + 'PM';
    } else {
        time = '-:--';
    }

    return (
        <span className='sunset'>
            <p>Sun Set</p>
            <p>{time}</p>
        </span>
    )
}

export default Sunset;