import React from 'react'
import AboutContent from '../components/AboutContent'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectBg from '../components/ProjectBg'

export default function About() {
  return (
    <div>
      <Navbar/>
      <ProjectBg heading="ABOUT" text="Passionate about learning and development with a desire to apply skills on a larger development team. Capable of continous learning from the Senior Developers"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
