import React from 'react';
import AllArticles from '../AllArticles/AllArticles';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AllArticles/>
    </div>
  );
};

export default Home;