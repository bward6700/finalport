import React from 'react'
import './About.css'
import port from './images/port.png'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
               <img src={port} alt='personalpic'></img>
                <div className='col-2'>
                    <h2>About Me</h2>
                    <span className='line'></span>
                    <p>I am an apprentice in coding with a huge thirst to learn more. Other interests include team sports such as basketball and any other team-related activity. I love working with others to gain more experience by learning from others. I am determined to learn as much as I can in the tech field and make an impact on society.</p>
                    <p>I am Brandon Ward, an apprentice for a non-profit organization called RoadtoHire.</p>
                    <button className='button'>Explore Projects</button>
                </div>
            </div>
        </div>
    )
}

export default About
