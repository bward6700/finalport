import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h1>Contact Me</h1>
        <div className='container'>
            <input type="text" placeholder='Name'/>
            <input type='email'placeholder='Email'/>
            <input placeholder='Phone Number'/>
            <textarea placeholder='Message'/>
            <button>
                Send
            </button>
        </div>
    </div>
  )
}

export default Contact