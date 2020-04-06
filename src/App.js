import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      city: 'cty',
      date: null,
      data: null,
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
}

  render() { 
    return ( 
      <Router>

        <div className="weatherbox">
          <ul>
            <li>
              {/* describes what thelink looks likes */}
              <Link to="/">Day</Link>
              <p> { this.state.data.city} </p>
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
}

function Day(){
  let getToday = useRouteMatch();
  
  return ( 
    <div>
      <h2>Day of the Week Temp</h2>

    </div>
  )
}

 
export default App;