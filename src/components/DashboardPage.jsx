import React from 'react'
import Header from './Header'
import { UserButton, auth } from '@clerk/nextjs';
import Container from './Container';


const stats = [
  { id: 1, name: 'Charm', value: 'I' },
  { id: 2, name: 'Madonna', value: 'Love' },
  { id: 3, name: 'Lea', value: 'You' },
]

const DashboardPage = () => {
    const { userId } = auth();
  return (
    <>

      <Header userId={userId}/>
      <Container>
        <div className='h-[calc(100vh-200px)]  items-center justify-center px-80 py-20 space-x-10 space-y-10'>
          <div className='text-8xl font-bold'>Thank you for your pre-registration!</div>
          <div className='text-5xl font-bold'>Our team will contact you soon.</div>
        </div>
      </Container>
    </>
  )
}

export default DashboardPage