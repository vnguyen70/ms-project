import React, { Component } from 'react';

import '../../App.css';

import MainDialogue from '../Dialogue/MainDialogue'

import heartOn from '../../Assets/heart-on.png';
import heartOff from '../../Assets/heart-off.png';

import starOn from '../../Assets/star-on.png';
import starOff from '../../Assets/star-off.png';


class Summary extends Component {
  constructor(props) {
    super(props); 
    this.retryMonth = this.retryMonth.bind(this);
  }
    
  retryMonth(month) {
    this.props.retryMonth(month);
  }
    
  render() {
    return (
      <div className="Summary">
        <div className="Summary-Overlay-Box">
          <div className="Summary-Header">
            <img src={heartOn} className="Summary-Icon" id="Summary-L" alt="heart icon" />  
            <img src={heartOn} className="Summary-Icon" id="Summary-M" alt="heart icon" />  
            <img src={heartOn} className="Summary-Icon" id="Summary-R" alt="heart icon" />  
          </div>
          <p className="Summary-Month">Month</p>
          <p className="Summary-Num">0</p>
          <p className="Summary-Complete">Complete!</p>
          <p className="Summary-Text">{this.props.summary}</p>
          <div>
            <button className="Summary-Button" id="Retry" onClick={() => this.retryMonth(this.props.month)}>Retry</button> 
            <button className="Summary-Button" id="Continue">Continue</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
