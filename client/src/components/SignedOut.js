import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Sticky } from "semantic-ui-react";
import Logo from "./Logo";

class SignedOut extends Component {
  state = {
    activeItem: "home"
  };

  handleMenuClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });

  render() {
    const { activeItem } = this.state;

    return (
      <Sticky>
        <Menu>
          <Menu.Item
            as={Link}
            to="/items"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleMenuClick}
          >
            <Logo />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              as={Link}
              to="/login"
              name="log-in"
              active={activeItem === "log-in"}
              onClick={this.handleMenuClick}
            >
              Log In{" "}
            </Menu.Item>

            <Menu.Item
              as={Link}
              to="/signup"
              name="sign-up"
              className="ui green basic button"
              active={activeItem === "sign-up"}
              onClick={this.handleMenuClick}
            >
              Sign Up{" "}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Sticky>
    );
  }
}

export default SignedOut;
