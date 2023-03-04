import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'
import {FaBars, FaTimes,} from 'react-icons/fa'


export default function Navbar() {
    const[click,setClick]=useState(true);
    const handleClick=()=>setClick(!click);
    const[color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY >=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
        
    }
    window.addEventListener("scroll",changeColor);
    
  return (
    <div className={color ? "header header-bg" :
    "header"}>
        <Link to='/'><h1>Portfolio</h1></Link>
        <ul className={
            click?"nav-menu":
            "nav-menu active"
        }>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/project"><li>Project</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <div className='bar' onClick={handleClick}>
            {
                click?
                <FaBars  size='20' color='white'/>:
                <FaTimes size='20' color='white'/>
            }
        
       
        

        </div>
    </div>
  )
}
