import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      city: null,
      date: null,
      day1weather: null,
      hourWeather: null,

      day1img: '',
      day2img: '',
      day3img: '',
      day4img: '',
      day5img: '',
     }
  }

  
  async Day () {
    const weatherDay = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Dallas,us&APPID=a3f2467086e2bd2e13ffdad5355858ba');
    this.setState({ city: weatherDay.data})
  }

  render() {
    return (
      <div className="weatherbox">
        <p>makign sure the page is working</p>
      </div>
    )
  }
}

