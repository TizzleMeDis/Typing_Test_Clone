import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faInfo, faCrown, faGear, faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <div className='left-section'>
          <p>Logo</p>
          <span> <FontAwesomeIcon icon={faKeyboard}/> </span>
          <span> <FontAwesomeIcon icon={faCrown}/> </span>
          <span> <FontAwesomeIcon icon={faInfo}/> </span>
          <span> <FontAwesomeIcon icon={faGear}/> </span>
        </div>

        <div className='right-section'>
          <span> <FontAwesomeIcon icon={faBell}/> </span>
          <span> <FontAwesomeIcon icon={faUser}/> </span>
        </div>
    </div>
  )
}

export default Header;