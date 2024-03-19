
'use client'
import Card from './LandingPageCarousel';
import Footer from './Footer';
import Header from './Header'
import Hero from './LandingPage/Hero'
import Navbar from './LandingPage/Navbar'
import React, { useEffect, useState } from 'react';
import Info from './Info';
import LandingPageCarousel from './LandingPageCarousel';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import News from './News';

const LandingPage = () => {
  const [data, setData] = useState(null);

    
  return (
    <div className='mx-auto'>
      <Navbar/>
      <Hero/>
      <Info/>
      <News/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default LandingPage