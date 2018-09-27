import React from "react";
import { Embed } from 'semantic-ui-react'


const AboutPage = () => (

  <div className="ui container">
    <h2>About</h2>
    <div className="ui raise padded container segment">
      <h4>Wellness Shop is a full stack application  for selling health products. The application utilizes React  & Redux for frontend with a Rails API for backend. The app is styled using Semantic UI with custom CSS.</h4>
      <br></br><h3>Features</h3>
      <ul>
        <li>Signup/Login with authentication</li>
        <li>Login token persists until logged out</li>
        <li>View & update account details</li>
        <li>Logged out view</li>
        <li>Like items and sort by likes</li>
        <li>Add item to cart</li>
        <li>View cart items with total cost</li>
        <li>Ability to remove items from cart</li>
        <li>Confirm order with confirmation page</li>
      </ul>
    </div>
    <h4>Designed & Developed by Anthony Mendola</h4>
    <p>To Learn More Click Below</p>
    <div className="ui raise very padded container segment">
      <Embed
        icon='right circle arrow'
        size="small"
        placeholder='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        url='https://www.anthonymendola.com'
      />
    </div>
  </div>

);

export default AboutPage;