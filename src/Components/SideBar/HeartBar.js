import React, { Component } from 'react';

import heartOn from '../../Assets/heart-on.png';
import heartOff from '../../Assets/heart-off.png';

import '../../App.css';


class HeartBar extends Component {
  render() {
    return (
      <div className="Side-bar" id="Hearts-bar">
        <img src={heartOn} className="Side-icon" id="Heart-icon" alt="heart icon" />  
        <img src={heartOn} className="Side-icon" id="Heart-icon" alt="heart icon" />  
        <img src={heartOff} className="Side-icon" id="Heart-icon" alt="heart icon" />  
      </div>
    );
  }
}

export default HeartBar;