import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import News from '../News/News';

const NewsDetails = () => {
  const {_id} = useParams();
  const [newsDetail, setNewsDetail] = useState([])

  useEffect(() => {
    const url = `https://boiling-beyond-51301.herokuapp.com/news?${_id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setNewsDetail(data))
  }, [_id])
  return (
    <div>
      {
        newsDetail && newsDetail.map(news => <News key={news._id} news={news}></News> )
      }
    </div>
  );
};

export default NewsDetails;