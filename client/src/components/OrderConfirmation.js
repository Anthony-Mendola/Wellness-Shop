import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";

const OrderConfirmation = () => (
  <Container>
    <Header className="ui very padded raised container segment" color="teal" as="h1" textAlign="center">
      Thank you for your order!
      <Divider hidden />
      <h3>Your item(s) will be shipped within 1 business days.</h3>
      <h3>If you're interested in hiring a health coach, click the link below!</h3>
      <a href="http://www.wellnesswithanthony.com/" target="_blank">Click Here</a>
    </Header>
  </Container>
);

export default OrderConfirmation;
