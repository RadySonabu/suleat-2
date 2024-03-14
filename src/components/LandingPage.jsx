
'use client'
import Card from './Card';
import Footer from './Footer';
import Header from './Header'
import Hero from './LandingPage/Hero'
import Navbar from './LandingPage/Navbar'
import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [data, setData] = useState(null);

    
  return (
    <div className='mx-auto'>
      <Navbar/>
      <Hero />
      <Card/>
      <Footer/>
    </div>
  )
}

export default LandingPage