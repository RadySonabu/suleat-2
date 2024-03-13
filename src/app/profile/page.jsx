"use server"
import React from 'react'
import Header from '@/components/Header';
import Container from '@/components/Container';
// import Chart from '@/components/ProfilePage/chart';.
import { auth } from '@clerk/nextjs';


const Profile = () =>  {
  const user = auth()
  return (
    <div>
        {user ? 'user': 'no user'}
        <Header/>
        <Container>
          Flavor Profile
          {/* <Chart/> */}
        </Container>
    </div>
  )
}
export default Profile
