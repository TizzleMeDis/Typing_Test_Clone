import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCircleDollarToSlot, faCode, faFileContract, faShieldHalved, faLock, faPalette, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='links'>
        <div className='section-one'>
          <span><FontAwesomeIcon icon={faEnvelope}/> Contact</span>
          <span><FontAwesomeIcon icon={faCircleDollarToSlot}/> Support</span>
          <span><FontAwesomeIcon icon={faCode}/> Github</span>
          <span><FontAwesomeIcon icon={faDiscord}/> Discord</span>
          <span><FontAwesomeIcon icon={faTwitter}/> Twitter</span>
          <span><FontAwesomeIcon icon={faFileContract}/> Terms</span>
          <span><FontAwesomeIcon icon={faShieldHalved}/> Security</span>
          <span><FontAwesomeIcon icon={faLock}/> Privacy</span>
        </div>
        <div className='section-two'>
          <span><FontAwesomeIcon icon={faPalette}/> Color</span>
          <span><FontAwesomeIcon icon={faCodeBranch}/> Version</span>
        </div>
      </div>
    </div>
  )
}
