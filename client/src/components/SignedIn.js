import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/userActions";
import { Link } from "react-router-dom";

class SignedIn extends Component {
  state = {
    activeItem: "home"
  };

  handleMenuClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });

  handleLogout = e => {
    e.preventDefault();
    this.props.actions.logoutUser();
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            as={Link}
            to="/items"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleMenuClick}
          />
          />
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/cart"
              name="cart"
              active={activeItem === "cart"}
              onClick={this.handleMenuClick}
            >
              <Icon name="shopping cart" />
              Cart ({this.props.itemCount})
            </Menu.Item>
            <Menu.Item
              name="log-out"
              active={activeItem === "log-out"}
              onClick={this.handleLogout}
            >
              Log Out{" "}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    itemCount: state.user.cart.items.length
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignedIn);
