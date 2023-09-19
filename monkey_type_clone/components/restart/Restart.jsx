import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import './Restart.css'

export default function Restart() {
    return (
        <div className='restart-container'>
            <div className='restart'>
                <FontAwesomeIcon icon={faArrowRotateRight}/>
            </div>

            <div className='help-text'>
                <div className='text'><span className='keys'>tab</span> + <span className='keys'>enter</span> - restart</div>
                <div className='text'><span className='keys'>esc</span> or <span className='keys'>shift</span> + <span className='keys'>ctrl</span> + <span className='keys'>p</span> - command line</div>
            </div>
        </div>
    )
}