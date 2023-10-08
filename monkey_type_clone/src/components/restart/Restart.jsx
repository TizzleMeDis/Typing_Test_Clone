import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'

export default function Restart() {
    return (
        <div className='m-4 p-4 text-lg'>
            <div className='p-4 m-8'>
                <FontAwesomeIcon icon={faArrowRotateRight}/>
            </div>

            <div className='m-4 p-2'>
                <div className='m-1.5'><span className='bg-amber-100 p-0.5 rounded-md'>tab</span> + <span className='bg-amber-100 p-0.5 rounded-md'>enter</span> - restart</div>
                <div className='m-1.5'><span className='bg-amber-100 p-0.5 rounded-md'>esc</span> or <span className='bg-amber-100 p-0.5 rounded-md'>shift</span> + <span className='bg-amber-100 p-0.5 rounded-md'>ctrl</span> + <span className='bg-amber-100 p-0.5 rounded-md'>p</span> - command line</div>
            </div>
        </div>
    )
}