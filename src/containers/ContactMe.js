import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Page is a hero image, followed by a short bio & links
export default () =>
  <div className="contactMe">
    <h3>Contact Me</h3>
    <div className="contactMeText">
        <p>Email me: andrew.voneshen@gmail.com</p>
    </div>
    <div>
      <a href="https://github.com/avoneshen">
        <FontAwesomeIcon className="socialLinks" icon={['fab', 'github']} size="7x" />
      </a>
      <a href="https://www.linkedin.com/in/andrewvoneshen/">
        <FontAwesomeIcon className="socialLinks" icon={['fab', 'linkedin']} size="7x" />
      </a>
    </div>
  </div>;
