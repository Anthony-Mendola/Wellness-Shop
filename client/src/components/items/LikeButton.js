import React from "react";
import { Button, Icon, Label } from "semantic-ui-react"

const LikeButton = () => {
  return (
    <div>
      <Button as='div' labelPosition='right'>
        <Button icon>
          <Icon name="heart" />
          Like
      </Button>
        <Label as="a" basic pointing="left">
          0
        </Label>
      </Button>
    </div>
  )
}






export default LikeButton