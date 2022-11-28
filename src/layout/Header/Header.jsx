import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';

import { LogoHeader } from '../../components/icons';
import CartIcon from '../../components/cart/cart-icon/cart-icon';
import CartDropdown from '../../components/cart/cart-dropDown/cart-dropDown';

import { auth } from '../../firebase/firebase.util';
import { signOut } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { userSlice } from '../../redux/user/userSlice';

import './Header.styles.scss';


const Header = ({isLogin}) => {

  const [toggleCart , setToggleCart] = useState(false) ;

  const dispatch = useDispatch() ;

  const handleSignOut = () => {
    signOut(auth) ; 
    dispatch(
      userSlice.actions.setUser({}) 
      )
  }

  const handleToggleCart = () => {
    setToggleCart( (prev) => !prev ) 
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
      {
        isLogin && <CartIcon
        handleToggleCart={ handleToggleCart }
        ></CartIcon> 
      }
      <div>
        {
         toggleCart && <CartDropdown></CartDropdown>
        } 
      </div>
    </div>
  </div>
  );
}
  
export default Header;