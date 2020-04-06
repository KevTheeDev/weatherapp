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
              <Link to="/"></Link>
            </li>
          </ul>
        </div>

      </Router>
    );
  }
}
 
export default App;