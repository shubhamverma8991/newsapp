import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./Componnets/Navbar";
import News from "./Componnets/News";

export default class App extends Component {
  c = "john";
  render() {
    return (
      <div className="container">
        <Navbar />
        <News />
      </div>
    );
  }
}
