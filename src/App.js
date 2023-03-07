import "./App.css";

import React, { Component } from "react";
import Navbar from "./Componnets/Navbar";
import News from "./Componnets/News";

export default class App extends Component {
  c = "john";
  render() {
    var newPerPageCount = 6;

    return (
      <div className="container">
        <Navbar />
        <button type="button" onClick={this.newsten}>
          10
        </button>
        <button type="button" onClick={this.newsfifteen}>
          15
        </button>
        <button type="button" onClick={this.newstwenty}>
          20
        </button>

        <News newsCount={newPerPageCount} />
      </div>
    );
  }
}
