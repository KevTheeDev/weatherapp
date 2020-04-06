import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import './App.css';

class App extends React.Component {
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
              <Link to="/">Day</Link>
            </li>
          </ul>

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