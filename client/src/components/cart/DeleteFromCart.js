import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/userActions";
import { Form, Button } from "semantic-ui-react";

class DeleteFromCart extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.deleteFromCart(this.props);
  };

  render() {
    return (
      <div>
        <Form
          id={"delete-from-cart-" + this.props.itemId}
          onSubmit={this.handleSubmit}
        >
          <input name="cart_id" type="hidden" value={this.props.cartId} />
          <input name="item_id" type="hidden" value={this.props.itemId} />
          <Button type="submit" compact={true}>
            X
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cartId: state.user.cart.id };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteFromCart);
