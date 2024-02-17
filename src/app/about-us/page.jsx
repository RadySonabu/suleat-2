import React from 'react'
import AboutUs from '@/components/AboutUs'
import Header from '@/components/Header'
const AboutUsPage = () => {
  return (
    <>
      <div>
      <div className='fixed  top-0 w-full'>
        <Header/>
      </div>
      <AboutUs/>
    </div>
    </>
  )
}

export default AboutUsPage