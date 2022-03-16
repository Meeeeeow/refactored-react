import React from 'react'
import SearchBox from '../search/searchBox';
import './header.css';
function Header() {
  return (
    <div className='header'>
        <h1 className='banner'>Monsters Rolodex</h1>
        <SearchBox placeholder="Enter a name"/>
    </div>
    
  )
}

export default Header