import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='nav-wrap'>
      <ul className='nav-list'>
        <Link to='/lists'>Lists</Link>
        <Link to='/my-list'>My List</Link>
      </ul>
    </div>
  )
}

export default Nav;