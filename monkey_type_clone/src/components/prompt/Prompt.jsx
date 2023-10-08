import React, { useState, useEffect } from 'react'
import stories from '../../assets/stories.json'

export default function Prompt() {

    const [phrase, setPhrase] = useState(stories[Math.floor(Math.random()*4)].story)

    const words = phrase.split(' ');
    
    return (
        <div className='p-4 m-4 h-36 text-xl border border-black whitespace-break-spaces overflow-hidden'>
            {words.map((word, index) => (
                <span className='m-0.5' key={index}>{word.split('').map((letter, index) => (
                        <span className='m-0.25' key={index}>{letter}</span>
                ))} </span>
            ))}
        </div>
    )
}