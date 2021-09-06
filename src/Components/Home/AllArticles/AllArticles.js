import React from 'react';
import { Link } from 'react-router-dom';
import Banner1 from "../../../Image/Banner1.jpg";
import Articles from '../Articles/Articles';

const Article = [
  {
    _id: 1,
    title: "best king in the world",
    author: "Abul Kalam",
    img: Banner1,
    category: "politics",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, esse!"
  },
  {
    _id: 2,
    title: "best king in the world",
    author: "Abul Kalam",
    img: Banner1,
    category: "politics",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, esse!"
  },
  {
    _id: 3,
    title: "best king in the world",
    author: "Abul Kalam",
    img: Banner1,
    category: "politics",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, esse!"
  },
  {
    _id: 3,
    title: "best king in the world",
    author: "Abul Kalam",
    img: Banner1,
    category: "politics",
    Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, esse!"
  }
]

const AllArticles = () => {
  return (
    <div className="container text-center">
      <div className="pt-5">
        <h1>[ Upgrade <span className="text-muted">News</span> ]</h1>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            CATEGORY
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><Link to="/" class="dropdown-item" href="#">Business</Link></li>
            <li><Link to="/" class="dropdown-item" href="#">Entertainment</Link></li>
            <li><Link to="/" class="dropdown-item" href="#">Politics</Link></li>
            <li><Link to="/" class="dropdown-item" href="#">Sports</Link></li>
            <li><Link to="/" class="dropdown-item" href="#">International</Link></li>
          </ul>
        </div>
      </div>
      <div className="row container justify-content-center">
        {
          Article.map(articles => <Articles key={articles._id} article={articles} />)
        }
      </div>
    </div>
  );
};

export default AllArticles;