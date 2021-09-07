import React from 'react';

const News = ({ news }) => {
  return (
    <div className="container text-center">
      <div>
        <h1>{news.title}</h1>
        <p>Author: {news.author}</p>
        <img style={{ height: "300px" }} src={news.imageURL} alt="" />
      </div>
      <br />
      <br />
      <small>{news.description}</small>
    </div>
  );
};

export default News;