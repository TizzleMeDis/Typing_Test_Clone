import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='help-text'>
        <div>tab + enter - restart</div>
        <div>esc or shift + ctrl + p - command line</div>

      </div>
        <div className='links'>
          <div className='section-one'>
            <p>Contact</p>
            <p>Support</p>
            <p>Github</p>
            <p>Discord</p>
            <p>Twitter</p>
            <p>Terms</p>
            <p>Security</p>
            <p>Privacy</p>
          </div>
          <div className='section-two'>
            <p>Color</p>
            <p>Version</p>
          </div>
        </div>
    </div>
  )
}
