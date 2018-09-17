import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/itemActions";
import { Header, Container, Divider } from "semantic-ui-react";
import ItemsList from "../components/items/ItemsList";
import CheckoutCart from "../components/cart/CheckoutCart";

class Cart extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <Container>
          <Header color="teal" as="h1" textAlign="center">
            Your Cart
            <Divider hidden />
          </Header>
          <div className="page-container">
            <Divider />
            <div className="cart-left">
              <ItemsList page={"cart"} items={user.cart.items} />
            </div>
            <div className="cart-right">
              <h3>
                Total: <em>${this.props.total}</em>
              </h3>
              <Divider className="cart-divider" />
              <h3>Address:</h3>
              {user.first_name} {user.last_name}
              <br />
              {user.address}
              <br />
              {user.city}, {user.state_initials} {user.zip}
              <br />
              <Divider hidden />
              {}
              <CheckoutCart />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

//reduce method to add up amounts in cart. (total, currentamount) => total + amount
function mapStateToProps(state) {
  return {
    user: state.user,
    total: state.user.cart.items
      .map(item => item.price)
      .reduce((a, b) => a + b, 0)
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
