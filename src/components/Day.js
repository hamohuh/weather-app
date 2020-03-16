import React from 'react'

function Day(props) {

    let a = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let today = days[a.getDay()]

    return (
        <span className='today' >
            <span>{today}</span>
            <span> TODAY</span>
        </span>
    )
}

export default Day;