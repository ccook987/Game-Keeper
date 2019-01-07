import React from 'react';
import '../sass/main.scss';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='header-container'>
      <div className='logo'>
        <h1>Game Keeper</h1>
      </div>
      <div className='header-right'>
        <div className='header-links-container'>
          <h4 className='header-links'><Link to='/'>Search</Link></h4>
          <h4 className='header-links'><Link to='/profile'>Profile</Link></h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
