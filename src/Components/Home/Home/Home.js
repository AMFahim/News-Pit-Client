import React from 'react';
import AllArticles from '../AllArticles/AllArticles';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AllArticles/>
      <Footer/>
    </div>
  );
};

export default Home;