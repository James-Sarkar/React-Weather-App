import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd3257447f6141530fbc17da9f20830f8';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    this.setState({
      temperature: city && country ? data.main.temp : undefined,
      city: city && country ? data.name : undefined ,
      country: city && country ? data.sys.country : undefined,
      humidity: city && country ? data.main.humidity : undefined,
      description: city && country ? data.weather[0].description : undefined,
      error: city && country ? '' : 'Please enter a valid City or Country'
    });
  }
  
  render () {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather tempData={this.state} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;