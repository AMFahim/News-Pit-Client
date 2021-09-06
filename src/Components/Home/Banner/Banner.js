import React from 'react';
import './Banner.css';
import Banner3 from '../../../Image/Banner3.jpg';
import Banner1 from '../../../Image/Banner1.jpg';
import Banner2 from '../../../Image/Banner2.jpg';


const Banner = () => {
  return (
    <div>
      <div style={{maxHeight:"600px"}} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{maxHeight:"600px"}} src={Banner3} className="d-block w-100" alt="..."/>
            <div className ="carousel-caption d-none d-md-block">
            <h2>We Are Update News Provider</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur hic ratione doloribus explicabo reiciendis architecto distinctio, in ipsa saepe.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{maxHeight:"600px"}} src={Banner1} className="d-block w-100" alt="..."/>
            <div className ="carousel-caption d-none d-md-block">
            <h2>We Are Update News Provider</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam velit possimus eum tenetur vero deleniti animi doloremque quis. Ullam, esse!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{maxHeight:"600px"}} src={Banner2} className="d-block w-100" alt="..."/>
            <div className ="carousel-caption d-none d-md-block">
            <h2>We Are Update News Provider</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita atque sapiente quaerat debitis illum voluptatem magnam excepturi quam quod minima.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;