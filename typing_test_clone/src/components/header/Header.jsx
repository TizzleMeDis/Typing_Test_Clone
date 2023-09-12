import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className='left-section'>
          <p>Logo</p>
          <p>Start Test</p>
          <p>Leaderboard</p>
          <p>About</p>
          <p>Settings</p>
        </div>

        <div className='right-section'>
          <p>Notifications</p> 
          <p>Login</p>
        </div>
    </div>
  )
}

export default Header;