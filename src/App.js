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
    // .json converts the weadtherdatakey to readable text
    // with await gotAPI something comes back from the api
    // data is the main object with await gotAPI.json
      // so we start with .data when we want want to get anything from the object
    // it does when the onclick is used for get Weather
    // try {}catch(error) is if it fails, we'll know about it
    // .list is needed for the this.Setstate
   try { 
    const gotAPI = await fetch(weatherDataKey);
    const data = await gotAPI.json()
    console.log( data )
    this.setState({
      tempMin: data.list[0].main.temp_min,
      //data.list in a foreach loop to iterate throuhg each one
      tempMax: data.list[0].main.temp_max,
      
      //data.list in a foreach loop to iterate throuhg each one
      day: data.list[0].dt_txt,
    })
  } catch(error) {
    console.error(error)
  }
}



  render() {
    return (
      <div className="weatherbox">

          {/* prop={value} */}
          {/* .this refers to the getWeather */}
          {/* using an onclick in the p tag does not make the page refresh, so that's good */}
        <p id="render-weatherbox" onClick={this.getWeather}> {this.state.tempMin} {this.state.tempMax} {this.state.day}</p>
        <p id="render-weatherboxD2" onClick={this.getWeather}>{this.state.tempMin} {this.state.tempMax} {this.state.day}</p>
        <p id="render-weatherboxD3" onClick={this.getWeather}>{this.state.tempMin} {this.state.tempMax} {this.state.day}</p>
        <p id="render-weatherboxD4" onClick={this.getWeather}>{this.state.tempMin} {this.state.tempMax} {this.state.day}</p>
        <p id="render-weatherboxD5" onClick={this.getWeather}>{this.state.tempMin} {this.state.tempMax} {this.state.day}</p>

      </div>
      
    )
  }
}

