import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { Form, Button } from "semantic-ui-react";
import StatesList from "./StatesList";

class NewAccount extends Component {
  constructor(props) {
    super(props);
    if (props.formType === "createUser") {
      this.state = {
        email: "",
        password: "",
        password_placeholder: "•••••••",
        first_name: "",
        last_name: "",
        address: "",
        city: "",
        state_initials: "",
        zip: ""
      };
    } else if (props.formType === "updateUser") {
      this.state = {
        email: props.user.email,
        password: "",
        password_placeholder: "Please re-enter or change password",
        first_name: props.user.first_name,
        last_name: props.user.last_name,
        address: props.user.address,
        city: props.user.city,
        state_initials: props.user.state_initials,
        zip: props.user.zip
      };
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.formType === "createUser") {
      this.props.actions.createUser();
    } else if (this.props.formType === "updateUser") {
      this.props.actions.updateUser(this.props);
    }
  };

  render() {
    return (
      <div className="form-container">
        <Form id="user-form" onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <label>First Name</label>
              <input
                name="first_name"
                type="text"
                placeholder="Dalai"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                name="last_name"
                type="text"
                placeholder="Lama"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Address</label>
            <input
              name="address"
              type="text"
              placeholder="111 Enlightened Way"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Group>
            <Form.Field className="city-input">
              <label>City</label>
              <input
                name="city"
                type="text"
                placeholder="Glendale"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field className="state-input">
              <label>State</label>
              <input
                name="state_initials"
                className="ui fluid dropdown"
                list="states"
                placeholder="IN"
                maxLength="2"
                value={this.state.state_initials}
                onChange={this.handleChange}
              />
              <StatesList />
            </Form.Field>
            <Form.Field className="zip-input">
              <label>Zip Code</label>
              <input
                name="zip"
                type="text"
                placeholder="11385"
                maxLength="5"
                value={this.state.zip}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Email</label>
              <input
                name="email"
                type="text"
                placeholder="user@WellnessShop.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder={this.state.password_placeholder}
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form.Group>
          <input name="token" type="hidden" value={this.props.user.token} />
          <br />
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewAccount;
