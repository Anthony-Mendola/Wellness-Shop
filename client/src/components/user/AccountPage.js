import React from "react";
import { Header, Container, Divider } from "semantic-ui-react";
import NewAccount from "./NewAccount";

const AccountPage = () => (
  <Container>
    <Header as="h2" textAlign="center">
      Update Your Account Details
      <Divider hidden />
    </Header>
    <NewAccount formType={"updateUser"} />
  </Container>
);

export default AccountPage;
