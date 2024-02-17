
import React from 'react'
import Header from './Header'
import Hero from './LandingPage/Hero'
import Navbar from './LandingPage/Navbar'


const LandingPage = () => {
  return (
    <div className='mx-auto'>
      <Navbar/>
      <Hero />
    </div>
  )
}

export default LandingPage