import React, { Component } from "react";
import * as actions from "../actions/itemActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemsList from "../components/items/ItemsList";
import { Header } from "semantic-ui-react";


class ItemsPage extends Component {
  componentDidMount() {
    this.props.actions.fetchItems();
  }

  constructor() {
    super()
    this.state = {
      direction: {
        likes: 'asc'
      }
    }
  }


  sortBy(key) {
    this.setState({
      data: this.props.items.sort((a, b) => (
        this.state.direction[key] === 'asc'
          ? (a[key]) - (b[key])
          : (b[key]) - (a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }



  render() {
    return (
      <div>
        <div className="ui raise very padded fluid container segment">
          <Header as="h1" color="green" textAlign="center">
            Welcome to Anthony's Wellness Shop!
          </Header>
        </div>
        <button onClick={() => this.sortBy('likes')}>Sort By Likes</button>
        <Header as="h1" color="teal" textAlign="center">
          Items in stock
        </Header>
        <ItemsList page={"index"} items={this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsPage);
