import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/userActions";
import { Header, Container, Form, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value

    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.loginUser();
  };

  render() {
    return (
      <Container>
        <Header as="h2" textAlign="center">
          Sign In To Your Account
          <Divider hidden />
        </Header>
        <div className="login-form-container">
          <Form id="login-form" onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input
                name="email"
                type="text"
                placeholder="user@wellness.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <br />
            <Button primary type="submit">
              Log In
            </Button>
          </Form>
        </div>
        <Divider horizontal section>
          OR
        </Divider>
        <Button as={Link} to="/signup" secondary>
          Sign Up
        </Button>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
