import React from 'react'
import './Options.css'

export default function Options() {
  return (
    <div className='options'>
      <div className='content-container'>
        <div>
          <p>@ punctuations</p>
          <p># numbers</p>
        </div>
        <p>|</p>
        <div>
          <p>time</p>
          <p>words</p>
          <p>quote</p>
          <p>zen</p>
          <p>custom</p>
        </div>
        <p>|</p>
        <div>
          <p>Changing text</p>
        </div>
      </div>
    </div>
  )
}
