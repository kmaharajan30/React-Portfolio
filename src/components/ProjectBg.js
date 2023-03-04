import './projectBg.css';
import React from 'react'

export default function ProjectBg(props) {
  return (
    <div className='projectBg'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
