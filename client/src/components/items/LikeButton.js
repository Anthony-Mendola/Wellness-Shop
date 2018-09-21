import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react"

class LikeButton extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

  }


  handleLike = (e) => {
    e.preventDefault();

    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <Button as='div' labelPosition='right'>
          <Button icon onClick={this.handleLike}>
            <Icon name="heart" />
            Like
      </Button>
          <Label as="a" basic pointing="left">
            {this.state.count}
          </Label>
        </Button>
      </div >
    )
  }
}



export default LikeButton;
