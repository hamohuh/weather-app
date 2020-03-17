import React from 'react';
import axios from 'axios';
import './App.css';
import Searchform from './components/SearchForm';
import Body from './components/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: null,
      tempMeasure: true,
      errorMessage: ''
    }
  }

  /**
   * This methods loads the data from OpenWeather API 
   * and starts once we submit our search form or click search button
   */
  loadWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=b8eb68e1c174f223b1b7affd9174e75c`;

    await axios.get(url)
      .then(res => {
        this.setState({ weather: res })
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message })
      })
  }

  //getting data(city name) from our input in the SearchForm
  callback = (cityFromChile) => {
    this.setState({ city: cityFromChile })
  }

  // This method sets the error message to '' once we click close button on the toast
  resetError = () => {
    this.setState({ errorMessage: '' })
  }

  /**
   * This method is responsible for switching the Temprature between C and F
   * we pass it to Body Component then we pass it to SwitchTemp
   */
  toggleTemp = () => {
    this.setState({ tempMeasure: !this.state.tempMeasure })
  }

  render() {
    return (
      <div className="App">
        <Searchform
          loadWeather={this.loadWeather}
          callback={this.callback}
        />
        <Body
          weather={this.state.weather}
          toggleTemp={this.toggleTemp}
          tempMeasure={this.state.tempMeasure}
          errorMessage={this.state.errorMessage}
          resetError={this.resetError}
        />
      </div >
    )
  }
}

export default App;
