import React, { Component } from "react";
import User from "./User";
import photo from "./img/evaPhoto.png";

class Eva extends Component {
  render() {
    return (
      <div>
        I'm the first component after the App.js component...
        <User name="Eva.js component" photo={photo} />
      </div>
    );
  }
}

export default Eva;
