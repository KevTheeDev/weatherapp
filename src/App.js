import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>

        <div>
          <ul>
            <li>
              <Link to="">Day</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/">
              
            </Route>
          </Switch>
        </div>

      </Router>
    );
  }
}

function Day(){
  return <h2>Day of the Week Temp</h2>
}
 
export default App;