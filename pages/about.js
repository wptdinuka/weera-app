import React from 'react'
import Head from 'next/head'
import AboutGrid from '../components/AboutGrid'
import NavBar from '../components/NavBar.tsx'

const about = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar/>
        <AboutGrid/>
    </div>
  )
}

export default about