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
    _id: 4,
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
        <div className="dropdown">
        <select style={{ maxWidth: "400px" }} className="btn btn-secondary responsive-input" required>
            <option disabled={true} className="text-dark" value="Not set">Select Category</option>
            <option value="All">All</option>
            <option value="Business">Business</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Politics">Politics</option>
            <option value="Sports">Sports</option>
            <option value="International">International</option>
            <option value="Not set">Other</option>
          </select>
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