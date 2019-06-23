import React from 'react';

// props => {message: '...'}
export default function HelloFunction(props) {
    const toggleVisibility = () => {
        alert('hello from function');
    }

    return (
        <>
            <h1>
                Hello world
            </h1>
            <h3>
                {props.message}
            </h3>        
            <button onClick={toggleVisibility}>Toggle visibility</button>
        </>
    )
}