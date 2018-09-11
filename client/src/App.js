import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignedIn from "./components/SignedIn";
import Signup from "./components/Signup";
import LoggedInMenu from "./components/LoggedInMenu";
import LoggedOutMenu from "./components/LoggedOutMenu";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SignedIn />
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
