import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react"

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: this.props.likes
    }
    // this.handleLike = this.handleLike.bind(this)
  }

  // componentWillUpdate(nextProps, nextState) {

  //   debugger

  // }

  handleLike = (e) => {
    e.preventDefault();
    this.updateLikes(this.state.likes + 1);
    //console.log(this.state.likes + 1)
  }


  updateLikes = (likes) => {
    fetch(`/api/items/${this.props.id}`, {
      method: "PUT",
      body: JSON.stringify({ likes: likes }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      //.then(newLikes => console.log(newLikes.likes))
      .then(newLikes => this.setState({ likes: newLikes.likes }));
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
