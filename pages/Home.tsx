import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;