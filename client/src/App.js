import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignedIn from "./components/SignedIn";
import Signup from "./components/Signup";
import NewAccount from "./components/NewAccount";
import Cart from "./containers/Cart";
import Login from "./components/Login";
import SignedIn from "./components/SignedIn";
import SignedOut from "./components/SignedOut";
import ItemsPage from "./containers/ItemsPage";
import { Divider } from "semantic-ui-react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SignedIn />
          <SignedOut />
          <Divider hidden />
          <Route exact path="/" component={ItemsPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/NewAccount" component={NewAccount} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Router>
    );
  }
}

export default App;
