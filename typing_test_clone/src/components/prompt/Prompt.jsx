import React from 'react'
import './Prompt.css'

const phrase = () => {
    return "Here is your new typing challenge: Apples, bananas, cherries, dates, elephants, flamingos, giraffes, hammers, igloos, jellyfish, kangaroos, llamas, monkeys, narwhals, octopuses, penguins, quokkas, raccoons, sloths, tigers, umbrellas, violets, walruses, xenophobes, yaks, zebras.".split(' ').sort(() => Math.random() > 0.5 ? 1 : -1)
}
export default function Prompt() {
    return (
        <div className='phrase-container'>
            <p className='phrase'>{phrase()}</p>
        </div>
    )
}