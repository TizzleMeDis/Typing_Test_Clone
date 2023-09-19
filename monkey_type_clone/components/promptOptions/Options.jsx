import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faHashtag, faClock, faA, faQuoteLeft, faMountain, faWrench, faScrewdriverWrench, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Options.css'

export default function Options() {
  return (
    <div className='options'>
      <div className='content-container'>
        <div>
          <span><FontAwesomeIcon icon={faAt}/> punctuations</span>
          <span><FontAwesomeIcon icon={faHashtag}/> numbers</span>
        </div>
        <span>|</span>
        <div>
          <span><FontAwesomeIcon icon={faClock}/> time</span>
          <span><FontAwesomeIcon icon={faA}/> words</span>
          <span><FontAwesomeIcon icon={faQuoteLeft}/> quote</span>
          <span><FontAwesomeIcon icon={faMountain}/> zen</span>
          <span><FontAwesomeIcon icon={faWrench}/> custom</span>
        </div>
        <span>|</span>
        <div>
          <span>Changing text</span>
        </div>
      </div>
    </div>
  )
}
