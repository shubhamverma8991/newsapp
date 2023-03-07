import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    // Props
    let { title, description, imgURL, newsURL } = this.props;
    // Default Txt
    let defaulttxt = "Server Issue";
    // IMG Styling
    let imgStyle = {
      width: "100%",
      height: "180px",
    };
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img style={imgStyle} src={imgURL} className="card-img-top" alt={defaulttxt} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsURL} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
