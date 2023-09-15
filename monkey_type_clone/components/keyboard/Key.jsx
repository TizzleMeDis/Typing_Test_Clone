import React from 'react'

export default function Key(props) {

    const styles = {
        padding: "10px",
        margin: "5px"
    }

    const twoKeys = {
        display: 'flex',
        flexDirection: 'column',
        
    }
    return (
        <div style={styles}>
            {props.shift ? (
            <div style={twoKeys}>
                <p>
                    {props.shift}
                </p>
                <p>
                    {props.character}
                </p>
            </div>
            ) : (
            <p>
                {props.character}
            </p>
            )}
        </div>
    )
}