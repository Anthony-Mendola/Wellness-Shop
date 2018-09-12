import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/itemActions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./components/Signup";
import AccountPage from "./components/AccountPage";
import Cart from "./containers/Cart";
import Login from "./components/Login";
import SignedIn from "./components/SignedIn";
import SignedOut from "./components/SignedOut";
import ItemsPage from "./containers/ItemsPage";
import ItemShow from "./components/ItemShow";
import { Divider } from "semantic-ui-react";
import "./App.css";
import OrderConfirmation from "./components/OrderConfirmation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {this.props.token && <SignedIn />}
          {!this.props.token && <SignedOut />}
          <Divider hidden />
          <Route exact path="/" component={ItemsPage} />
          <Route exact path="/items" component={ItemsPage} />
          <Route path={"/items/:itemId"} component={ItemShow} />
          <Route path={"/confirmation"} component={OrderConfirmation} />
          {this.props.token && <Route exact path="/account" component={AccountPage} />}
          {!this.props.token && <Route exact path="/login" component={Login} />}
          {!this.props.token && <Route exact path="/signup" component={Signup} />}
          {this.props.token && <Route exact path="/cart" component={Cart} />}
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.user.token };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
