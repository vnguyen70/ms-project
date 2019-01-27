import React, { Component } from 'react';

import starOn from '../../Assets/star-on.png';
import starOff from '../../Assets/star-off.png';

import '../../App.css';

class StarBar extends Component {
  render() {
    return (
      <div className="Side-bar" id="Stars-bar">
        <img src={starOn} className="Side-icon" id="Star-icon" alt="star icon" />  
        <img src={starOff} className="Side-icon" id="Star-icon" alt="star icon" />  
        <img src={starOff} className="Side-icon" id="Star-icon" alt="star icon" />  
      </div>
    );
  }
}

export default StarBar;