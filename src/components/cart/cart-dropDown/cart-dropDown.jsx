import React from 'react';

import  Button  from "../../Button/Button.component"

import './cart-dropDown.styles.scss';

import { selectorCartItems } from '../../../redux/selector';
import { useSelector } from 'react-redux';
import CartItem from '../cartItems/cartItems';

const CartDropdown = () => {
   
  const cartItems = useSelector ( selectorCartItems ) ;

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        cartItems.map( (item) => 
        <CartItem
        item={item}
        ></CartItem> )
      }
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}

export default CartDropdown;