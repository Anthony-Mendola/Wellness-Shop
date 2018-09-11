import React, { Component } from "react";
import * as actions from "../actions/itemActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ItemsList from "../components/ItemsList";
import { Header, Divider } from "semantic-ui-react";

class ItemsPage extends Component {
  componentDidMount() {
    this.props.actions.fetchItems();
  }

  render() {
    return (
      <div>
        <Header as="h2" textAlign="center">
          Wellness Shop Items
          <Divider hidden />
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
