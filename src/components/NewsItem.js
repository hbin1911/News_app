import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
    let { title, description, imageurl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageurl?imageurl:"https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-720038230.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
