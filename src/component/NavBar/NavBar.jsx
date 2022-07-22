import React from 'react';
import { Link } from 'react-router-dom';
import './NabBar.css';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='navBar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/showBook'>ShowBook</Link>
          </li>
          <li>
            <Link to='/addBook'>AddBook</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
