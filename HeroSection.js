// Hero section component
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section text-center">
      <div className="container">
        <h1 className="display-4">Plan Your Dream Event with Themezy</h1>
        <p className="lead">Themed events at your fingertips. Choose from a variety of themes or create your own.</p>
        <Link to="/browse-themes" className="btn btn-primary btn-lg">Browse Themes</Link>
      </div>
    </div>
  );
};

export default HeroSection;
