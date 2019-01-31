import React, { Component } from "react";

import starOn from "../../Assets/star-on.png";
import starOff from "../../Assets/star-off.png";

import "../../App.css";

var topIcon;
var midIcon;
var botIcon;

class StarBar extends Component {
  getIcons() {
    topIcon = starOn;
    midIcon = starOn;
    botIcon = starOff;
  }

  render() {
    this.getIcons();
    return (
      <div className="Side-bar" id="Stars-bar">
        <img
          src={topIcon}
          className="Side-icon"
          id="Star-icon"
          alt="star icon"
        />
        <img
          src={midIcon}
          className="Side-icon"
          id="Star-icon"
          alt="star icon"
        />
        <img
          src={botIcon}
          className="Side-icon"
          id="Star-icon"
          alt="star icon"
        />
      </div>
    );
  }
}

export default StarBar;
