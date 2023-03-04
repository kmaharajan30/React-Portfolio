import './projCard.css';
import React from 'react';
import WorkCardData from './WorkCardData';
import ProjCard from './ProjCard';
// import ProjCard from '.ProjCard.js';


export default function Work() {
  return (
    <div className='projects'>
        <h1 className='heading'>Projects</h1>
        <div className='project-container'>
            {WorkCardData.map((val,ind)=>{
                return(
                    <ProjCard
                    key={ind}
                    img={val.img}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}/>
                )
            }
            )}            
        </div>
    </div>
  )
}
