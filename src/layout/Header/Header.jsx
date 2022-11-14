import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';

import { LogoHeader } from '../../components/icons';

import { auth } from '../../firebase/firebase.util';
import { signOut } from 'firebase/auth';

import './Header.styles.scss';


const Header = ({isLogin}) => {

  const handleSignOut = () => {
    signOut(auth) ; 
  }

  return (
    <div className='header'>
    <Link className='logo-container' to='/'>
      <LogoHeader className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        isLogin ? 
        <div 
        className='option'
        onClick={ handleSignOut }
        >SIGN OUT</div>
        :
        <Link className='option' to='/signInAndSignUp'>SIGN IN</Link>
      }
    </div>
  </div>
  );
}
  
export default Header;