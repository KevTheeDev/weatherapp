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
      tempMin: '',
      tempMax: '',

      
      day1img: '',
      day2img: '',
      day3img: '',
      day4img: '',
      day5img: '',
    }
  }

  //need to call the api_key
  getWeather = async () => {
    // use await in the async func to get the e
    const gotAPI = await fetch(weatherDataKey);

    //.json converts the weadtherdatakey to readable text
    const data = await gotAPI.json()
    
    //hopefully something comes back from the api
    //it does when the onclick is used for get Weather
    console.log( data )

    this.setState({
      //may not need the .list
      tempMin: data.list.temp_min,
      tempMax: data.list.temp_max,
      day: data.dt_txt,
    })
  }


  render() {
    return (
      <div className="weatherbox">

          {/* prop={value} */}
          {/* .this refers to the getWeather */}
          {/* using an onclick in the p tag does not make the page refresh, so that's good */}
        <p id="render-weatherbox" onClick={this.getWeather}>75deg</p>
        <p id="render-weatherbox" onClick={this.getWeather}>80deg</p>
        <p id="render-weatherbox" onClick={this.getWeather}>30deg</p>
        <p id="render-weatherbox" onClick={this.getWeather}>50deg</p>
        <p id="render-weatherbox" onClick={this.getWeather}>90deg</p>

      </div>
    )
  }
}

