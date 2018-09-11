import React, { Component } from "react";
//import * as actions from "../actions/itemActions";
import { Header, Divider } from "semantic-ui-react";
import ItemsList from "../components/ItemsList";

class ItemsPage extends Component {
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
