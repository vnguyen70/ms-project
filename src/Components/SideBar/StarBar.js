import React, { Component } from "react";

import starOn from "../../Assets/star-on.png";
import starOff from "../../Assets/star-off.png";

import "../../App.css";

var topIcon = starOff;
var midIcon = starOff;
var botIcon = starOn;

class StarBar extends Component {
  getIcons() {
    if (this.props.starCount === 0) {
      topIcon = starOff;
      midIcon = starOff;
      botIcon = starOff;
    } else if (this.props.starCount === 1) {
      topIcon = starOn;
      midIcon = starOff;
      botIcon = starOff;
    } else if (this.props.starCount === 2) {
      topIcon = starOn;
      midIcon = starOn;
      botIcon = starOff;
    } else if (this.props.starCount === 3) {
      topIcon = starOn;
      midIcon = starOn;
      botIcon = starOn;
    }
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
