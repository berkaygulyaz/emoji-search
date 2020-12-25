import React from 'react'

const Search = ({handleKeyUp}) => {
    return (
        <input type="text" placeholder="Search Here..." className="search-input" onKeyUp={(event) => handleKeyUp(event.target.value)} />
    )
}

export default Search;