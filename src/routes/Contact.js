import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'
import ProjectBg from '../components/ProjectBg'

export default function Contact() {
  return (
    <div>
      <Navbar/>
      <ProjectBg heading='CONTACT' text='Any Queries!'/>
      <Form/>
      <Footer/>
    </div>
  )
}
