import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, handlechange}) => {
    return (
        /*e.target.value is the value of the search input */
        <input className='search' type='serach' placeholder={placeholder} onChange={handlechange}/>
    )
}
