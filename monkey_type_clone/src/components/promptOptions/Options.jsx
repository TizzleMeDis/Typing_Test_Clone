import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faHashtag, faClock, faA, faQuoteLeft, faMountain, faWrench, faScrewdriverWrench, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Options() {
  return (
    <div className='flex justify-center items-center m-1.5 mb-4 text-base'>
      <div className='flex items-center border border-black py-4 px-4 rounded-md'>
        <div>
          <span className="mx-1.5"><FontAwesomeIcon icon={faAt}/> punctuations</span>
          <span className="mx-1.5"><FontAwesomeIcon icon={faHashtag}/> numbers</span>
        </div>
        <span className="mx-1.5">|</span>
        <div>
          <span className="mx-1.5"><FontAwesomeIcon icon={faClock}/> time</span>
          <span className="mx-1.5"><FontAwesomeIcon icon={faA}/> words</span>
          <span className="mx-1.5"><FontAwesomeIcon icon={faQuoteLeft}/> quote</span>
          <span className="mx-1.5"><FontAwesomeIcon icon={faMountain}/> zen</span>
          <span className="mx-1.5"><FontAwesomeIcon icon={faWrench}/> custom</span>
        </div>
        <span className="mx-1.5">|</span>
        <div>
          <span className="mx-1.5">Changing text</span>
        </div>
      </div>
    </div>
  )
}
