import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faInfo, faCrown, faGear, faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser, faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <div className='right-section'>
          <span className='logo'> <FontAwesomeIcon icon={faFontAwesome}/>monkeytypeclone</span>
          <span className='header-link'> <FontAwesomeIcon icon={faKeyboard}/> </span>
          <span className='header-link'> <FontAwesomeIcon icon={faCrown}/> </span>
          <span className='header-link'> <FontAwesomeIcon icon={faInfo}/> </span>
          <span className='header-link'> <FontAwesomeIcon icon={faGear}/> </span>
        </div>
        <div className='left-section'>
          <span className='header-link'> <FontAwesomeIcon icon={faBell}/> </span>
          <span className='header-link'> <FontAwesomeIcon icon={faUser}/> </span>
        </div>
    </div>
  )
}

export default Header;