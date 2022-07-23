import React from 'react';
import { Link } from 'react-router-dom';
import './NabBar.css';

const NavBar = () => {
  return (
    <nav className='nav-container'>
     <main>
     <Link to='/' className='nav-link'>
        Home
      </Link>

      <Link to='/showBook' className='nav-link'>
        ShowBooks
      </Link>

      <Link to='/addBook' className='nav-link'>
        AddBook
      </Link>
     </main>
    </nav>
  );
};

export default NavBar;
