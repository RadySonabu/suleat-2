import React from 'react'
import Header from './Header'
import { UserButton, auth } from '@clerk/nextjs';
import Container from './Container';



const DashboardPage = () => {
    const { userId } = auth();
  return (
    <>

      <div className='sticky top-0 w-full z-10'><Header userId={userId}/></div>
      <div className='md:mt-0 z-0'>
      <Container>
        <div className=' items-center justify-center text-center md:h-screen md:flex md:flex-col '>
          <div className='text-2xl font-bold md:text-8xl'>Thank you for pre-registrating!</div>
          <div className='text-1xl font-bold md:text-5xl'>Our team will contact you soon regarding the features that we are offering.</div>
        </div>
      </Container>
      </div>
    </>
  )
}

export default DashboardPage