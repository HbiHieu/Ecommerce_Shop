import React from 'react';

import './checkout-item.styles.scss';

import { cartSlice } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity , id } = cartItem ;
  const dispatch = useDispatch() ;

  const handleClearItem = () => {
    dispatch( cartSlice.actions.clearCartItem(id) ) ;
  }

  const handleRemoveItem = () => {
    dispatch ( cartSlice.actions.removeCartItem(id) ) ;
  }

  const handleAddItem = () => {
    dispatch ( cartSlice.actions.addToCart(cartItem) ) ;
  }

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
      <div className='arrow' onClick={ handleRemoveItem } >
            &#10094;
          </div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={ handleAddItem } >
            &#10095;
          </div>
        </span>
      <span className='price'>{price}</span>
      <div 
      className='remove-button'
      onClick={ handleClearItem }
      >&#10005;</div>
    </div>
  );
}

export default CheckoutItem;