import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faInfo, faCrown, faGear, faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser, faFontAwesome } from '@fortawesome/free-regular-svg-icons';
import './Header.css'


function Header() {
  return (
    <div className='p-6 flex items-center justify-between'>
        <div className='m-2'>
          <span className='text-xxl'> <FontAwesomeIcon icon={faFontAwesome}/>monkeytypeclone</span>
          <span className='text-xl'> <FontAwesomeIcon icon={faKeyboard}/> </span>
          <span className='text-xl'> <FontAwesomeIcon icon={faCrown}/> </span>
          <span className='text-xl'> <FontAwesomeIcon icon={faInfo}/> </span>
          <span className='text-xl'> <FontAwesomeIcon icon={faGear}/> </span>
        </div>
        <div className='text-xl'>
          <span className='text-xl'> <FontAwesomeIcon icon={faBell}/> </span>
          <span className='text-xl'> <FontAwesomeIcon icon={faUser}/> </span>
        </div>
    </div>
  )
}

export default Header;