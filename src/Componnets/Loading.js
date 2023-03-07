import React, { Component } from "react";
import Spin from "./Bean Eater-1s-200px.gif";

export default class Loading extends Component {
  render() {
    let myStyle = {
      margin: "12rem",
    };
    return (
      <div className="text-center" style={myStyle}>
        <img src={Spin} alt="Please Wait..." />
      </div>
    );
  }
}
