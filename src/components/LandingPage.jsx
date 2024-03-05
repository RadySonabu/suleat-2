
'use client'
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
    </div>
  )
}

export default LandingPage