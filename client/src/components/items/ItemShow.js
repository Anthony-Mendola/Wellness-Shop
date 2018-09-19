import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/itemActions";
import AddToCart from "../cart/AddToCart";
import { Link } from "react-router-dom";

class ItemShow extends Component {
  componentDidMount() {
    this.props.actions.fetchItem(this.props);
  }

  render() {
    const item = this.props.item;

    return (
      <div className="item-div">
        <Link className="ui teal button" to="/items">
          Back
        </Link>
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
      </div >
    );
  }

  //removes component from DOM
  componentWillUnmount() {
    this.props.actions.cleanupItem();
  }
}

//hasOwnProperty: if user has cart
//ownProps: react-redux passes the prop passed to this component into connect func
//the state being mapped to props is the redux state
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

//changes will be reflected when new actions are dispatched
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

// function that wraps the ItemShow component with store connection
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemShow);
