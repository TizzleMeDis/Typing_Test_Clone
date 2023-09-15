import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faHashtag, faClock, faA, faQuoteLeft, faMountain, faWrench, faScrewdriverWrench, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Options.css'

export default function Options() {
  return (
    <div className='options'>
      <div className='content-container'>
        <div>
          <p><span><FontAwesomeIcon icon={faAt}/></span> punctuations</p>
          <p><span><FontAwesomeIcon icon={faHashtag}/></span> numbers</p>
        </div>
        <p>|</p>
        <div>
          <p><span><FontAwesomeIcon icon={faClock}/></span> time</p>
          <p><span><FontAwesomeIcon icon={faA}/></span> words</p>
          <p><span><FontAwesomeIcon icon={faQuoteLeft}/></span> quote</p>
          <p><span><FontAwesomeIcon icon={faMountain}/></span> zen</p>
          <p><span><FontAwesomeIcon icon={faWrench}/></span> custom</p>
        </div>
        <p>|</p>
        <div>
          <p>Changing text</p>
        </div>
      </div>
    </div>
  )
}
