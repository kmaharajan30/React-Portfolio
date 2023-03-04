import './form.css';
import React from 'react'

export default function Form() {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'/>
            <label>Email</label>
            <input type='email'/>
            <label>Message</label>
            <textarea rows='6' placeholder='Type your message here!' ></textarea>
            <button className='btn'>Submit</button>
        </form>

    </div>
  )
}
