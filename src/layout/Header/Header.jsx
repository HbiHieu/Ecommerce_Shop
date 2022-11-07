import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';

import { LogoHeader } from '../../components/icons';

import { auth } from '../../firebase/firebase.util';
import { onAuthStateChanged , signOut } from 'firebase/auth';

import './Header.styles.scss';


const Header = () => {

  const [isLogin,setIsLogin] = useState(false) ;
  const navigate = useNavigate() ;

  const handleSignOut = () => {
    signOut(auth) ; 
  }

  useEffect( () => {
    const checkUser = onAuthStateChanged(auth , (user) => {
      if(user) {
        console.log(user)
        setIsLogin(true) ;
        navigate("/");
      } 
      else {
        setIsLogin(false) ;
        console.log("user signed out")
      }
    });
    return () => checkUser() ;
  },[]) 

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
        <Link className='option' to='signIn'>SIGN IN</Link>
      }
    </div>
  </div>
  );
}
  
export default Header;