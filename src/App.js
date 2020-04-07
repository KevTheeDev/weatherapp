import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const weatherDataKey = 'http://api.openweathermap.org/data/2.5/forecast?q=Dallas,us&APPID=a3f2467086e2bd2e13ffdad5355858ba';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      day: [],
      tempMin: null,
      tempMax: null,

      
      day1img: '',
      day2img: '',
      day3img: '',
      day4img: '',
      day5img: '',
    }
  }

  //need to call the api_key
  async getWeather () {
    // use await in the async func to get the e
    const gotAPI = await fetch(weatherDataKey);

    //.json converts the weadtherdatakey to readable text
    const data = await gotAPI.json()
    
    //hopefully something comes back from the pai
    console.log( data )

    this.setState({
      //may not need the .list
      tempMin: data.list.main.temp_min,
      tempMax: data.list.main.temp_max,
      day: data.dt_txt,
    })
  }


  render() {
    return (
      <div className="weatherbox">

          {/* prop={value} */}
          {/* .this refers to the getWeather */}
          {/* using an onclick in the p tag does not make the page refresh, so that's good */}
        <p id="render-weatherbox"onClick={this.getWeather}></p>
        <p id="render-weatherbox">80deg</p>
        <p id="render-weatherbox">30deg</p>
        <p id="render-weatherbox">50deg</p>
        <p id="render-weatherbox">90deg</p>

      </div>
    )
  }
}

