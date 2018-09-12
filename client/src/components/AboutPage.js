import React from "react";
import { Icon } from "semantic-ui-react";

const AboutPage = props => (

  <div className="container">
    <h2>About</h2>
    <p>Wellness Shop is a full stack application designed to look similar to amazon.com but for health products. The application utilizes React  & Redux for frontend with a Rails API for backend. The app is styled using Semantic UI with custom CSS.</p>
    <h3>To Learn More:</h3>
    <div className="icon-box">
      <a href="https://github.com/Anthony-Mendola/Wellness-Shop"><i className="github" aria-hidden="true"></i></a>
    </div>
    <h3>Contact Info</h3>
    <div className="icon-box">
      <a href="http://www.anthonymendola.com/"><i className="code" aria-hidden="true"></i></a>
      <a href="mailto:anthonymendola@gmail.com"><i className="mail" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/anthonymendola/" ><i className="linkedin" aria-hidden="true"></i></a>
      <a href="https://angel.co/anthonymendola" ><i className="angellist" aria-hidden="true"></i></a>
    </div>
  </div>

);

export default AboutPage;