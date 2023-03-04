import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjCard from '../components/ProjCard'
import ProjectBg from '../components/ProjectBg'
import Work from '../components/Work'

export default function Project() {
  return (
    <div>
      <Navbar/>
      <ProjectBg  heading="PROJECTS." text="Few of my Projects"/>
      <Work/>
      <Footer/>
    </div>
  )
}
