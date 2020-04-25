import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Login from "./components/login";
 import PrivateRoute from "./components/privateRoutes";
 import FrindsList from "./components/friendsList"
import CreateFriend from "./components/createFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="createFriend">Create Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FrindsList} />
          <Route path="/login" component={Login} />
          <Route path="/createFriend" component={CreateFriend}/>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;