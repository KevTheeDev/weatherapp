import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';

import './App.css';

class App extends React.Component {
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



  
  render() { 
    return ( 
      <Router>

        <div className="weatherbox">
          <ul>
            <li>
              {/* describes what thelink looks likes */}
              <Link to="/">Day</Link>
              <p> { this.state.city} </p>
            </li>
          </ul>

            {/* switch */}
            {/* "path" mathces the "to" in the link */}
            {/* route mathces to the component you have */}
          <Switch>
            <Route path="/">
              {/* returns day functions */}

              <Day />
            </Route>
          </Switch>
        </div>

      </Router>
    );
  }
  async Day () {
    const weatherDay = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Dallas,us&APPID=a3f2467086e2bd2e13ffdad5355858ba');
    this.setState({ city: weatherDay.data})
  }


}

function Day(){
  let getToday = useRouteMatch();
  
  return ( 
    <div>
      <h2>Day of the Week Temp {this.state.city.map.temp}</h2>

      {/* {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)} */}

    </div>
  )
}


export default App;