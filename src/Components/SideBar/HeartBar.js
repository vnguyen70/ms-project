import React, { Component } from "react";

import heartOn from "../../Assets/heart-on.png";
import heartOff from "../../Assets/heart-off.png";

import "../../App.css";

var topIcon;
var midIcon;
var botIcon;

class HeartBar extends Component {
  getIcons() {
    topIcon = heartOn;
    midIcon = heartOn;
    botIcon = heartOff;
  }

  render() {
    this.getIcons();
    return (
      <div className="Side-bar" id="Hearts-bar">
        <img
          src={topIcon}
          className="Side-icon"
          id="Heart-icon"
          alt="heart icon"
        />
        <img
          src={midIcon}
          className="Side-icon"
          id="Heart-icon"
          alt="heart icon"
        />
        <img
          src={botIcon}
          className="Side-icon"
          id="Heart-icon"
          alt="heart icon"
        />
      </div>
    );
  }
}

export default HeartBar;
