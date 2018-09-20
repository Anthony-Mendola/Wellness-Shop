import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/userActions";
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
  //When the add to cart button is clicked, the button becomes disabled
  handleSubmit = e => {
    e.preventDefault();
    console.log('A')
    this.props.actions.addToCart();
    console.log('B')
    this.setState({ buttonDisabled: true });
  };

  render() {
    return (
      <div>
        <Form id="add-to-cart" onSubmit={this.handleSubmit}>
          <input name="cart_id" type="hidden" value={this.props.cartId} />
          <input name="item_id" type="hidden" value={this.props.itemId} />
          <Button
            className="ui inverted green button"
            type="submit"
            disabled={this.state.buttonDisabled}
          >
            Add to Cart
          </Button>
        </Form>
        <br />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { itemIds: state.user.cart.items.map(item => item.id) };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCart);
