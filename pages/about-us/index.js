import React from 'react'
import Head from "next/head";

import Navbar from '../../components/navbar'
export default function index() {
  return (
    <div>
        <Head>
        <title>Suleat - Changing how you consume food.</title>
        <meta
          name="description"
          content="Suleat - Changing how you consume food."
        />
        <link rel="icon" href="/img/suleat.png" />
      </Head>

      <Navbar />
    </div>
  )
}
