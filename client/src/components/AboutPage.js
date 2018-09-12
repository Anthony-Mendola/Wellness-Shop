import React from "react";
import { Icon, Embed } from 'semantic-ui-react'


const AboutPage = props => (

  <div className="ui container">
    <h2>About</h2>
    <div className="ui raise padded container segment">
      <h4>Wellness Shop is a full stack application designed to look similar to amazon.com but for health products. The application utilizes React  & Redux for frontend with a Rails API for backend. The app is styled using Semantic UI with custom CSS.</h4>
    </div>
    <h4>Designed & Developed by Anthony Mendola</h4>
    <p>To Learn More Click Below</p>
    <div className="ui raise very padded container segment">
      <Embed
        icon='right circle arrow'
        size="small"
        placeholder='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        url='http://www.anthonymendola.com'
      />
    </div>
  </div>

);

export default AboutPage;