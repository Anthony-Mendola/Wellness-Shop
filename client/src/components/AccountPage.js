import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import NewAccount from "./NewAccount";

const Signup = () => (
  <Container>
    <Header as="h2" textAlign="center">
      Update Account Details
      <Divider hidden />
    </Header>
    <NewAccount formType={"updateUser"} />
  </Container>
);

export default Signup;
