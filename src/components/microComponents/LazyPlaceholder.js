import React from 'react';

const LazyPlaceholder = ({charNumber}) => {
    let rand = Math.floor(Math.random() * charNumber) + 2;
    let placeholder = [];
    for (let i = 0; i < rand; i++) {
        placeholder.push(<span className="opacity-1" key={i}>&#9632;</span>)
    }
    return (
        <>{placeholder}</>
    )
};

export default LazyPlaceholder;
