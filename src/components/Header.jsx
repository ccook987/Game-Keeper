import React from 'react';
import '../sass/main.scss';
import { Link } from 'react-router-dom';


function Header(){
  return (
    <div className='header-container'>
      <h1>Game Keeper</h1>
      <Link to='/'>Search</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  );
}

export default Header;
