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
      tempMeasure: true
    }
  }

  loadWeather = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=b8eb68e1c174f223b1b7affd9174e75c`;

    await axios.get(url)
      .then(res => {
        this.setState({ weather: res })
      })
      .catch(() => {
        console.log("Couldn't get Weather");
      })
    console.log(this.state.weather);
  }

  //getting data from child
  callback = (cityFromChile) => {
    this.setState({ city: cityFromChile })
  }

  toggleTemp = () => {
    console.log("hi");
    this.setState({ tempMeasure: !this.state.tempMeasure })
    console.log(this.state.tempMeasure);
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
        />
      </div >
    )
  }
}




export default App;
