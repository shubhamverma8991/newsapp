import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";

export default class News extends Component {
  // For State
  constructor() {
    super();
    console.log("Inside Constructor");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult: 0,
      pagesize: 10,
    };
  }

  async componentDidMount() {
    console.log("Inside componentDidMount");
    let completeNewsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=31c6edef4fcc413aaa1bbbb609971bca&page=1&pagesize=${this.props.newsCount}`;
    let data = await fetch(completeNewsUrl);
    let parseData = await data.json();
    this.setState({ totalResult: parseData.totalResults, articles: parseData.articles, loading: false });
    this.setState({ articles: parseData.articles });
  }

  handlePrevious = async () => {
    // this.setState({ loading: true });
    let completeNewsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=31c6edef4fcc413aaa1bbbb609971bca&page=${
      this.state.page - 1
    }&pagesize=${this.state.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(completeNewsUrl);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, page: this.state.page - 1, loading: false });
  };

  handleNext = async () => {
    // this.setState({ loading: true });
    if (this.state.page + 1 < Math.ceil(this.state.totalResult / this.state.pagesize)) {
      let completeNewsUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=31c6edef4fcc413aaa1bbbb609971bca&page=${
        this.state.page + 1
      }&pagesize=${this.state.pagesize}`;
      this.setState({ loading: true });
      let data = await fetch(completeNewsUrl);

      let parseData = await data.json();
      console.log(parseData);
      // if (parseData.articles.length > 1) {
      this.setState({ articles: parseData.articles, page: this.state.page + 1, loading: false });
      // }
    } else {
      console.log("exit");
    }
  };

  render() {
    // console.log("DOM");
    return (
      <div className="container my-3">
        <h1 className="text-center btn-dark">Mor Samachar </h1>
        {this.state.loading && <Loading />}
        <div className="row">
          {/* Map Loop to Display N Number of News */}
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title == null ? "" : element.title.slice(0, 45)}
                  description={element.description == null ? "" : element.description.slice(0, 88)}
                  imgURL={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="buttons contianer">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlePrevious}>
            Prev
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.state.pagesize)}
            type="button"
            className="btn btn-dark mx-3"
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
