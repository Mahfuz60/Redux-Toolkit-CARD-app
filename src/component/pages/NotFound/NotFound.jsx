import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>404! Page is Not Found!</h1>
      <button>
        <Link to='/'>Back To Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
