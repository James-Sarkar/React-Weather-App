import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'd3257447f6141530fbc17da9f20830f8';

class App extends React.Component {
  getWeather = () => {

  }
  
  render () {
    return (
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;