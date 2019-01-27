import React, { Component } from "react";

import logo from "../../Assets/logo.svg";
import responseBubble from "../../Assets/response-bubble.png";

import "../../App.css";

import Summary from "../Summary/Summary";
import { summaryText } from "../Summary/summaryText";

import SamDialogue from "./SamDialogue";
import { samDialogue } from "./DialogueText/SamText";

import UserDialogue from "./UserDialogue";
import { userDialogue } from "./DialogueText/UserText";

import HeartBar from "../SideBar/HeartBar";
import StarBar from "../SideBar/StarBar";

var month = 0;
var exchange = 1;

var personality = 0;

var debug = "hi";

var responseID1 = "u1a";
var responseID2 = "u1b";
var responseID3 = "u1c";

class MainDialogue extends Component {
  constructor() {
    super();

    this.state = {
      hideExchange1: true,
      hideExchange2: true,
      hideExchange3: true,
      hideExchange4: true,
      hideExchange5: true,
      hideExchange6: true,
      hideExchange7: true,
      hideExchange8: true,
      hideExchange9: true,
      hideExchange10: true,
      hideExchange11: true,
      hideExchange12: true,
      hideExchange13: true,
      hideExchange14: true,
      hideExchange15: true,
      hideExchange16: true,

      exchange1: " ",
      exchange2: " ",
      exchange3: " ",
      exchange4: " ",
      exchange5: " ",
      exchange6: " ",
      exchange7: " ",
      exchange8: " ",
      exchange9: " ",
      exchange10: " ",
      exchange11: " ",
      exchange12: " ",
      exchange13: " ",
      exchange14: " ",
      exchange15: " ",
      exchange16: " ",

      hideSummary0: true,
      hideSummary6: true,
      hideSummary12: true,
      hideSummary18: true,
      hideSummary24: true,

      shownSummary0: false,
      shownSummary6: false,
      shownSummary12: false,
      shownSummary18: false,
      shownSummary24: false,

      summary0: " ",
      summary6: " ",
      summary12: " ",
      summary18: " ",
      summary24: " ",

      props: {
        summary: this.getSummaryText,
        retryMonth: this.retryMonth
      }
    };
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  populateResponses(a, b, c) {
    var random = this.getRandomInt(3);

    if (random === 0) {
      responseID1 = a;
      responseID2 = b;
      responseID3 = c;
    } else if (random === 1) {
      responseID1 = c;
      responseID2 = a;
      responseID3 = b;
    } else if (random === 2) {
      responseID1 = b;
      responseID2 = c;
      responseID3 = a;
    }

    exchange++;
  }

  getUserDialogue(id) {
    return userDialogue.find(x => x.id === id).text;
  }

  getSamDialogue(id) {
    return samDialogue.find(x => x.id === id).text;
  }

  getSummaryText(id) {
    return summaryText.find(x => x.id === id).text;
  }

  changeDialogueState(entry) {
    if (exchange === 1) {
      if (entry === "u1a") {
        this.setState({
          hideExchange1: false,
          exchange1: "u1a"
        });
        personality++;
      } else if (entry === "u1b") {
        this.setState({
          hideExchange1: false,
          exchange1: "u1b"
        });
        personality++;
      } else if (entry === "u1c") {
        this.setState({
          hideExchange1: false,
          exchange1: "u1c"
        });
      }
      this.populateResponses("u2a", "u2b", "u2c");
    } else if (exchange === 2) {
      if (entry === "u2a") {
        this.setState({
          hideExchange2: false,
          exchange2: "u2a"
        });
        this.populateResponses("u3a", "u3b", "u3c");
      } else if (entry === "u2b") {
        this.setState({
          hideExchange2: false,
          exchange2: "u2b"
        });
        this.populateResponses("u3d", "u3e", "u3c");
      } else if (entry === "u2c") {
        this.setState({
          hideExchange2: false,
          exchange2: "u2c"
        });
        this.populateResponses("u3f", "u3g", "u3h");
      }
    } else if (exchange === 3) {
      if (entry === "u3a") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3a"
        });
        this.populateResponses("u4a", "u4b", "u4c2");
      } else if (entry === "u3b") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3b"
        });
        this.populateResponses("u4a", "u4b", "u4c2");
      } else if (entry === "u3c") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3c"
        });
        this.populateResponses("u4c", "u4d", "u4d2");
      } else if (entry === "u3d") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3d"
        });
        this.populateResponses("u4e", "u4f", "u4g");
      } else if (entry === "u3e") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3e"
        });
        this.populateResponses("u4a", "u4b", "u4c2");
      } else if (entry === "u3f") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3f"
        });
        this.populateResponses("u4h", "u4i", "u4j");
      } else if (entry === "u3g") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3g"
        });
        personality++;
        this.populateResponses("u4h", "u4i", "u4k");
      } else if (entry === "u3h") {
        this.setState({
          hideExchange3: false,
          exchange3: "u3h"
        });
        personality += 2;
        this.populateResponses("u4h", "u4i", "u4l");
      }
    } else if (exchange === 4) {
      if (entry === "u4a") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4a"
        });
      } else if (entry === "u4b") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4b"
        });
      } else if (entry === "u4c") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4c"
        });
      } else if (entry === "u4c2") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4c2"
        });
      } else if (entry === "u4d") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4d"
        });
      } else if (entry === "u4d2") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4d2"
        });
      } else if (entry === "u4e") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4e"
        });
      } else if (entry === "u4f") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4f"
        });
      } else if (entry === "u4g") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4g"
        });
      } else if (entry === "u4h") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4h"
        });
      } else if (entry === "u4i") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4i"
        });
      } else if (entry === "u4j") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4j"
        });
      } else if (entry === "u4k") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4k"
        });
      } else if (entry === "u4l") {
        this.setState({
          hideExchange4: false,
          exchange4: "u4l"
        });
      }
      this.populateResponses("u5a", "u5b", "u5c");
    } else if (exchange === 5) {
      if (entry === "u5a") {
        this.setState({
          hideExchange5: false,
          exchange5: "u5a"
        });
      } else if (entry === "u5b") {
        this.setState({
          hideExchange5: false,
          exchange5: "u5b"
        });
      } else if (entry === "u5c") {
        this.setState({
          hideExchange5: false,
          exchange5: "u5c"
        });
      }
      this.populateResponses("u6a", " ", " ");
    } else if (exchange === 6) {
      if (entry === "u6a") {
        this.setState({
          hideExchange6: false,
          exchange6: "u6a"
        });
        this.populateResponses(" ", "gn", " ");
      }
    } else if (exchange === 7) {
      if (entry === "gn") {
        this.setState({
          hideSummary0: false
        });
      }
    }
  }

  toggleResponse1() {
    this.changeDialogueState(responseID1);
  }
  toggleResponse2() {
    this.changeDialogueState(responseID2);
  }
  toggleResponse3() {
    this.changeDialogueState(responseID3);
  }

  retryMonth(month) {
    if (month === 0) {
      this.setState({
        hideExchange1: true,
        hideExchange2: true,
        hideExchange3: true,
        hideExchange4: true,
        hideExchange5: true,
        hideExchange6: true,
        hideExchange7: true,

        hideSummary0: true
      });
      exchange = 1;
      month = 0;

      responseID1 = "u1a";
      responseID2 = "u1b";
      responseID3 = "u1c";
    }
  }

  continueMonth() {
    if (month === 0) {
      this.setState({
        hideSummary0: true,
      });
  }

  render() {
    return (
      <div>
        <div className="Dialogue-main">
          <div className="Side-bar-container">
            <HeartBar />
            <StarBar />
          </div>
          <div className="Box">
            <div className="Box-content" id="Dialogue">
              {/* ********************************************************************************** */}
              {/* ***********************************  MONTH 0 ************************************* */}
              {/* ********************************************************************************** */}
              <SamDialogue dialogue="Hey Quinn!" />

              {!this.state.hideExchange1 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange1)}
                />
              )}

              {!this.state.hideExchange1 && this.state.exchange1 === "u1a" && (
                <SamDialogue dialogue={this.getSamDialogue("s1a")} />
              )}
              {!this.state.hideExchange1 && this.state.exchange1 === "u1b" && (
                <SamDialogue dialogue={this.getSamDialogue("s1b")} />
              )}
              {!this.state.hideExchange1 && this.state.exchange1 === "u1c" && (
                <SamDialogue dialogue={this.getSamDialogue("s1c")} />
              )}

              {!this.state.hideExchange2 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange2)}
                />
              )}

              {!this.state.hideExchange2 && this.state.exchange2 === "u2a" && (
                <SamDialogue dialogue={this.getSamDialogue("s2a")} />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2b" && (
                <SamDialogue dialogue={this.getSamDialogue("s2b")} />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2b" && (
                <SamDialogue dialogue={this.getSamDialogue("s2b2")} />
              )}
              {!this.state.hideExchange2 && this.state.exchange2 === "u2c" && (
                <SamDialogue dialogue={this.getSamDialogue("s2c")} />
              )}

              {!this.state.hideExchange3 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange3)}
                />
              )}

              {!this.state.hideExchange3 && this.state.exchange3 === "u3a" && (
                <SamDialogue dialogue={this.getSamDialogue("s3a")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3b" && (
                <SamDialogue dialogue={this.getSamDialogue("s3b")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3c" && (
                <SamDialogue dialogue={this.getSamDialogue("s3c")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3c" && (
                <SamDialogue dialogue={this.getSamDialogue("s3c2")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3d" && (
                <SamDialogue dialogue={this.getSamDialogue("s3d")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3e" && (
                <SamDialogue dialogue={this.getSamDialogue("s3e")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3f" && (
                <SamDialogue dialogue={this.getSamDialogue("s3f")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3g" && (
                <SamDialogue dialogue={this.getSamDialogue("s3g")} />
              )}
              {!this.state.hideExchange3 && this.state.exchange3 === "u3h" && (
                <SamDialogue dialogue={this.getSamDialogue("s3h")} />
              )}

              {!this.state.hideExchange4 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange4)}
                />
              )}

              {!this.state.hideExchange4 && this.state.exchange4 === "u4a" && (
                <SamDialogue dialogue={this.getSamDialogue("s4a")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4b" && (
                <SamDialogue dialogue={this.getSamDialogue("s4b")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4c" && (
                <SamDialogue dialogue={this.getSamDialogue("s4c")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4c2" && (
                <SamDialogue dialogue={this.getSamDialogue("s4c")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4d" && (
                <SamDialogue dialogue={this.getSamDialogue("s4d")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4e" && (
                <SamDialogue dialogue={this.getSamDialogue("s4e")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4f" && (
                <SamDialogue dialogue={this.getSamDialogue("s4e")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4g" && (
                <SamDialogue dialogue={this.getSamDialogue("s4f")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4h" && (
                <SamDialogue dialogue={this.getSamDialogue("s4g")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4i" && (
                <SamDialogue dialogue={this.getSamDialogue("s4h")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4j" && (
                <SamDialogue dialogue={this.getSamDialogue("s4i")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4k" && (
                <SamDialogue dialogue={this.getSamDialogue("s4j")} />
              )}
              {!this.state.hideExchange4 && this.state.exchange4 === "u4l" && (
                <SamDialogue dialogue={this.getSamDialogue("s4k")} />
              )}
              {!this.state.hideExchange4 && (
                <SamDialogue dialogue={this.getSamDialogue("s4all")} />
              )}

              {!this.state.hideExchange5 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange5)}
                />
              )}

              {!this.state.hideExchange5 && this.state.exchange5 === "u5a" && (
                <SamDialogue dialogue={this.getSamDialogue("s5a")} />
              )}
              {!this.state.hideExchange5 && this.state.exchange5 === "u5b" && (
                <SamDialogue dialogue={this.getSamDialogue("s5b")} />
              )}
              {!this.state.hideExchange5 && this.state.exchange5 === "u5c" && (
                <SamDialogue dialogue={this.getSamDialogue("s5c")} />
              )}

              {!this.state.hideExchange6 && (
                <UserDialogue
                  dialogue={this.getUserDialogue(this.state.exchange6)}
                />
              )}

              {!this.state.hideExchange6 && this.state.exchange6 === "u6a" && (
                <SamDialogue dialogue={this.getSamDialogue("s6a")} />
              )}
              {!this.state.hideExchange6 && this.state.exchange6 === "u6a" && (
                <SamDialogue dialogue={this.getSamDialogue("s6b")} />
              )}

              {!this.state.hideSummary0 && (
                <Summary
                  summary={this.getSummaryText("m0-default")}
                  retryMonth={this.retryMonth}
                  month={month}
                />
              )}
            </div>
          </div>
        </div>
        <div className="Response-button-row">
          <img
            src={responseBubble}
            className="Response-bubble"
            alt="response bubble"
          />
          <div className="Response-text-div">
            <p>
              Click <br />
              to
              <br />
              respond!
            </p>
          </div>
        </div>
        <div className="Response-row">
          <button
            className="Response-button"
            id="Response1"
            onClick={this.toggleResponse1.bind(this)}
          >
            {userDialogue.find(x => x.id === responseID1).text}
          </button>
          <button
            className="Response-button"
            id="Response2"
            onClick={this.toggleResponse2.bind(this)}
          >
            {userDialogue.find(x => x.id === responseID2).text}
          </button>
          <button
            className="Response-button"
            id="Response3"
            onClick={this.toggleResponse3.bind(this)}
          >
            {userDialogue.find(x => x.id === responseID3).text}
          </button>
        </div>
      </div>
    );
  }
}

export default MainDialogue;
