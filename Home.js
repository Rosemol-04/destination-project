
import React from 'react';
import '../../App.css';

import HeroSection from '../HeroSection';
import Navbar from '../Navbar';
import Explore from '../Explore';
import Footer from '../Footer';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Explore />
      <Footer />
    </>
  );
}

export default Home;
