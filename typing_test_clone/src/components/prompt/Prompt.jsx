import React from 'react'
import './Prompt.css'



export default function Prompt() {

    const phrase = "This is a sample phrase.";
    const words = phrase.split(' ');
    
    return (
        <div className='phrase-container'>
            {words.map((word, index) => (
                <span className='word' key={index}>{word.split('').map((letter, index) => (
                        <letter className='character' key={index}>{letter}</letter>
                ))} </span>
            ))}
        </div>
    )
}