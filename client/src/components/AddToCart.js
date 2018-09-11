import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    if (props.itemIds.includes(parseInt(props.itemId, 10))) {
      this.state = { buttonDisabled: true };
    } else {
      this.state = { buttonDisabled: false };
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.actions.addToCart();
    this.setState({ buttonDisabled: true });
  };

  render() {
    return (
      <div>
        <Form id="add-to-cart" onSubmit={this.handleSubmit}>
          <input name="cart_id" type="hidden" value={this.props.cartId} />
          <input name="item_id" type="hidden" value={this.props.itemId} />
          <Button primary type="submit" disabled={this.state.buttonDisabled}>
            Add to Cart
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}

export default AddToCart;
