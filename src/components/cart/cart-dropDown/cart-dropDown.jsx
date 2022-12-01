import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';

import  Button  from "../../Button/Button.component"

import './cart-dropDown.styles.scss';

import { selectorCartItems } from '../../../redux/selector';
import { useSelector } from 'react-redux';
import CartItem from '../cartItems/cartItems';

const CartDropdown = ({setToggleCart}) => {
   
  const cartItems = useSelector ( selectorCartItems ) ;
  console.log('re-render') ;

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      { 
        cartItems.length ? 
        cartItems.map( (item) => 
        <CartItem
        item={item}
        ></CartItem> )
        : <span className='empty-message'>Your cart is empty</span>
      }
      </div>
      <Button
      onClick = { () => setToggleCart(false) }
      >
        <Link to={'checkout'}>GO TO CHECK OUT</Link>
      </Button>
    </div>
  );
}

export default memo(CartDropdown);