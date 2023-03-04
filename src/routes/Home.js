import React from 'react'
import Footer from '../components/Footer'
import HomeBackground from '../components/HomeBackground'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HomeBackground/>
        <Work/>
        <Footer/>
        
    </div>
  )
}
