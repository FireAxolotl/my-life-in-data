import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import PrivateRoute from 'PrivateRoute';
import Login from './Login';
import HomePage from './HomePage'
import SetEditor from './SetEditor';
import Metrics from './Metrics'

const MainComponent = () => {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/"><button>Home</button></Link>
        </li>
        <li>
          <Link to="/setEditor"><button>Set Editor</button></Link>
        </li>
        <li>
          <Link to="/metrics"><button>Metrics</button></Link>
        </li>
      </ul> 
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/setEditor">
          <SetEditor />
        </Route>
          <Route path="/metrics">
          <Metrics />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>

  )

}
    
export default MainComponent;