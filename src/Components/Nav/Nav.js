import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='nav-wrap'>
      <ul className='nav-list'> 
        <Link to='/home'>HOME</Link>
        <Link to='/lists'>LISTS</Link>
        <Link to='/create'>CREATE</Link>
      </ul>
    </div>
  )
}

export default Nav;