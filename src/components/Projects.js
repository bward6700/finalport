import React from 'react'
import './Projects.css'
import gateway from './images/gateway.png'
import bonapp from './images/bonapp.png'
import task from './images/tasktracker.png'
import ecom from './images/ecom.png'


const Projects = () => {
    return (
        <div className='projects' id='projects'>
           
           <h2>Projects</h2>
           <span className='line'></span>
           
            <div className='container'>
                <div className='content'>
                    <div className='card'>
                    <a href='https://profound-souffle-6502de.netlify.app/index.html'>   
                    <img src={gateway} alt='project' />
                        <p><span>Gateway Revision Project</span></p>
                       </a>
                        
                    </div>
                    <div className='card'>
                    <a href='https://bone-apple-teeth-r2h-g1.netlify.app/Shop'>  
                    <img src={bonapp} alt='project' />
                        <p><span>Website Redesign Project</span></p>
                        </a>
                    </div>
                    <div className='card'>
                    <a href='https://inspiring-crepe-32c57b.netlify.app/'>  
                    <img src={task} alt='project' />
                        <p><span>Task Tracker Project</span></p>
                        </a>
                    </div>
                    <div className='card'>
                    <a href='https://main.d35aezg9tpvqy6.amplifyapp.com/'>  
                       <img src={ecom} alt='project' />
                           <p><span>Ecommerce Project</span></p>
                           </a>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
