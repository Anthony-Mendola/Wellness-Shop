import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignedIn from "./components/SignedIn";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SignedIn />
        </div>
      </Router>
    );
  }
}

export default App;
