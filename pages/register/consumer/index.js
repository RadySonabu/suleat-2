import React from 'react'
import Login from '../../../components/Register'
import Navbar from '../../../components/navbar'
import Head from 'next/head'

function index() {
  return (
    <>
        <Head>
        <title>Suleat - Changing how you consume food.</title>
        <meta
          name="description"
          content="Suleat - Changing how you consume food."
        />
        <link rel="icon" href="/img/suleat.png" />
      </Head>

      <Navbar />
        <Login/>
    </>
  )
}

export default index