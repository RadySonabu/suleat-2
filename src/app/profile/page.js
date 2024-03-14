'use client'
import React from 'react'
import { UserButton, auth } from "@clerk/nextjs";
import Header from '@/components/Header';
import Container from '@/components/Container';
import Chart from '@/components/ProfilePage/chart';

const Profile = () =>  {
  return (
    <div>
        <Header/>
        <Container>
          Flavor Profile
          <Chart/>
        </Container>
    </div>
  )
}
export default Profile
