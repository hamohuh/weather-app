import React from 'react'

function SearchForm(props) {

    const handleChange = (e) => {
        props.callback(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loadWeather();
    }

    return (
        <form id='app-form' onSubmit={handleSubmit}>
            <input id='city-name-input' onChange={handleChange} type='text' placeholder='City...'></input>
            <button id='search-button'>Search</button>
        </form>
    )
}

export default SearchForm;