import React from 'react';

import { ShoppingIcon } from '../../icons/icon';

import { selectorCartItems } from '../../../redux/selector';
import { useSelector } from 'react-redux';


import './cart-icon.styles.scss';

const CartIcon = ( { handleToggleCart } ) => {
  const cartItems = useSelector ( selectorCartItems ) ;

  return (
    <div 
    className='cart-icon' 
    onClick={handleToggleCart}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItems.length}</span>
    </div>
  );
}

export default CartIcon ;



