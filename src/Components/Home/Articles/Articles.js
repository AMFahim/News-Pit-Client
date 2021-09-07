import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ article }) => {
  return (
      <div className="col-md-6 pt-5 for-articles text-center align-center">
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={article.imageURL} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <small className="card-title">{article.title}</small>
                <Link to="/"><button className="btn text-muted">See More...</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Articles;