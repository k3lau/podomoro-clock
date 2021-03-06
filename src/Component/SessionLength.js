import React, { Component } from "react";
import {
  SettingContainer,
  StyledButton,
  StyledRow,
  TimeFormat,
} from "./TimerSetting.elements";
import { displayTimeMMSS } from "../Util/TimeFormat";

export class SessionLength extends Component {
  constructor(props) {
    super(props);
    this.decre = this.decre.bind(this);
    this.incre = this.incre.bind(this);
  }

  decre() {
    var time = this.props.sessionLength - 60;
    if (time >= 10) {
      this.props.setSession(time);
      if (this.props.timerType === "Session") {
        this.props.setTimeLeft(this.props.timeLeft - 60);
      }
    }
  }

  incre() {
    var time = this.props.sessionLength + 60;
    if (time <= 3600) {
      this.props.setSession(time);
      if (this.props.timerType === "Session") {
        this.props.setTimeLeft(this.props.timeLeft + 60);
      }
    }
  }

  render() {
    return (
      <SettingContainer>
        <div id="session-label">Session</div>
        <StyledRow>
          <StyledButton
            variant="primary"
            id="session-decrement"
            onClick={this.decre}
          >
            <i className="fas fa-angle-down fa-sm"></i>
          </StyledButton>
          <TimeFormat id="session-length">{`${displayTimeMMSS(
            this.props.sessionLength
          )}`}</TimeFormat>

          <StyledButton
            variant="primary"
            id="session-increment"
            onClick={this.incre}
          >
            <i className="fas fa-angle-up fa-sm"></i>
          </StyledButton>
        </StyledRow>
      </SettingContainer>
    );
  }
}
