import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react"

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: this.props.likes
    }

  }

  handleLike = (e) => {
    e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
    })
  }

  componentDidUpdate() {
    updateLikes(this.state.id, this.state.likes)

    function updateLikes(itemId, likes) {
      fetch(`/api/items/${itemId}`, {
        method: "PUT",
        body: JSON.stringify({ likes: likes }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleLike} as='div' labelPosition='right'>
          <Button icon >
            <Icon name="heart" />
            Like
      </Button>
          <Label as="a" basic pointing="left">
            {this.state.likes}
          </Label>
        </Button>
      </div >
    )
  }
}



export default LikeButton;
