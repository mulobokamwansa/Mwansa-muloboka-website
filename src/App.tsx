
import React from 'react';
import Navbar from "./components/nav/Navbar";
import HeroSection from "./components/header/HeroSection";
import FeatureSection from "./components/feature/FeatureSection";
import Workflow from "./components/workflow/Workflow";
import  Pricing from "./components/pricing/Pricing";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer ";
const App = () => {

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonial />
      <Footer />
      </div> 
    </>
  );
};

export default App;





