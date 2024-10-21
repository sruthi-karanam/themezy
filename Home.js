// Home page component
import React from 'react';
import HeroSection from '../components/HeroSection';
import BrowseThemes from '../components/BrowseThemes';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BrowseThemes />
      <Testimonials />
    </div>
  );
};

export default Home;
