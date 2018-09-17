import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/itemActions";
import AddToCart from "../cart/AddToCart";

class ItemShow extends Component {
  componentDidMount() {
    this.props.actions.fetchItem(this.props);
  }

  render() {
    const item = this.props.item;

    return (
      <div className="item-div">
        <a className="ui teal button" href="/items">
          Back
        </a>
        <div className="ui raise very padded container segment">
          <h2>{item.name}</h2>
          <img src={item.img_full} alt={item.name} />
          <h3>
            <em>${item.price}</em>
          </h3>
          {this.props.cartId && ( //button displays only when logged in
            <AddToCart cartId={this.props.cartId} itemId={this.props.itemId} />
          )}
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.actions.cleanupItem();
  }
}

//hasOwnProperty: if user has cart
//ownProps: react-redux passes the prop passed to this component into my connect func
function mapStateToProps(state, ownProps) {
  if (state.user.hasOwnProperty("cart")) {
    return {
      cartId: state.user.cart.id,
      itemId: ownProps.match.params.itemId,
      item: state.currentItem
    };
  } else {
    return {
      itemId: ownProps.match.params.itemId,
      item: state.currentItem
    };
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow);
