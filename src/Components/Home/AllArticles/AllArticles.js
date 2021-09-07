import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner1 from "../../../Image/Banner1.jpg";
import Articles from '../Articles/Articles';


const AllArticles = () => {
  const [Article, setArticle] = useState([])

  useEffect(() => {
    const url = 'https://boiling-beyond-51301.herokuapp.com/news';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticle(data))
  }, [])

  const filterItem = (categoryItem) =>{
    const updatedItems = Article.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setArticle(updatedItems)
  }

  return (
    <div className="container text-center">
      <div className="pt-5">
        <h1>[ Upgrade <span className="text-muted">News</span> ]</h1>
        <div>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => setArticle(Article)}>All News</button>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Business')}>Business</button>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Entertainment')}>Entertainment</button>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Politics')}>Politics</button>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Sports')}>Sports</button>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('International')}>international</button>
          <button className="btn btn-secondary ms-2 mb-2" onClick={() => filterItem('Not set')}>Other</button>
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