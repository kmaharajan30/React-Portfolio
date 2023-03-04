import './aboutContent.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>I am a Front-End Developer who can provide you responsive websites.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
            <div className='img-up'>
                <img src='https://wallpaperaccess.com/full/3910941.jpg' className='img'/>
            </div>
            <div className='img-down'>
                <img src='https://wallpaperaccess.com/full/3909258.jpg' className='img'/>
            </div>
            </div>
            
        </div>
        
    </div>
  )
}
