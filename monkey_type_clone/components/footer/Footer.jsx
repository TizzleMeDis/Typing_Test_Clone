import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight ,faEnvelope, faCircleDollarToSlot, faCode, faFileContract, faShieldHalved, faLock, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='restart'>
        <FontAwesomeIcon icon={faArrowRotateRight}/>
      </div>
      <div className='help-text'>
        <div><p className='keys'>tab</p> + <p className='keys'>enter</p> - restart</div>
        <div><p className='keys'>esc</p> or <p className='keys'>shift</p> + <p className='keys'>ctrl</p> + <p className='keys'>p</p> - command line</div>
      </div>
        <div className='links'>
          <div className='section-one'>
            <span><FontAwesomeIcon icon={faEnvelope}/><p>Contact</p></span>
            <span><FontAwesomeIcon icon={faCircleDollarToSlot}/><p>Support</p></span>
            <span><FontAwesomeIcon icon={faCode}/><p>Github</p></span>
            <span><FontAwesomeIcon icon={faDiscord}/><p>Discord</p></span>
            <span><FontAwesomeIcon icon={faTwitter}/><p>Twitter</p></span>
            <span><FontAwesomeIcon icon={faFileContract}/><p>Terms</p></span>
            <span><FontAwesomeIcon icon={faShieldHalved}/><p>Security</p></span>
            <span><FontAwesomeIcon icon={faLock}/><p>Privacy</p></span>
          </div>
          <div className='section-two'>
          <span><FontAwesomeIcon icon={faPalette}/><p>Color</p></span>
          <span><FontAwesomeIcon icon={faCodeBranch}/><p>Version</p></span>
          </div>
        </div>
    </div>
  )
}
