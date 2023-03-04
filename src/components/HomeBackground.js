import React from 'react'
import { Link } from 'react-router-dom';
import BackgroundBg from '../assets/home-bg.jpg';
import './homeBackground.css';

export default function HomeBackground() {
  return (
    <div className='home'>
        <div className='background'>
          <img className='background-img' src={BackgroundBg} />
        </div>
        <div className='content'>
          <p>HI I'M A FREE LANCER</p>
          <h1>React Developer</h1>
          <div>
            <Link to='project' className='btn'>Projects</Link>
            <Link to='contact' className='btn btn-light'>Contact</Link>
          </div>

        </div>
        
    </div>
  )
}
