import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/itemActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import NewAccount from "./components/NewAccount";
import Cart from "./containers/Cart";
import Login from "./components/Login";
import SignedIn from "./components/SignedIn";
import SignedOut from "./components/SignedOut";
import ItemsPage from "./containers/ItemsPage";
import ItemShow from "./components/ItemShow";
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
          <Route path={"/items/:itemId"} component={ItemShow} />
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

function mapStateToProps(state) {
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
