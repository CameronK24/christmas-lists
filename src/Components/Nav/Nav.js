import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div className='nav-wrap'>
      <ul className='nav-list'> 
        <li>
          <h1>HOME</h1>
        </li>
        <li>LISTS</li>
        <li>CREATE LIST</li>
      </ul>
    </div>
  )
}

export default Nav;