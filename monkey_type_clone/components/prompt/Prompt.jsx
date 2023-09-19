import React, { useState, useEffect } from 'react'
import stories from '../../src/assets/stories.json'
import './Prompt.css'

export default function Prompt() {

    const [phrase, setPhrase] = useState(stories[Math.floor(Math.random()*20)].story)

    const story = stories
    const sentence = "This is a sample phrase.";
    const words = phrase.split(' ');
    
    return (
        <div className='phrase-container'>
            {words.map((word, index) => (
                <span className='word' key={index}>{word.split('').map((letter, index) => (
                        <span className='character' key={index}>{letter}</span>
                ))} </span>
            ))}
        </div>
    )
}