import React from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

import { useSelector } from 'react-redux';
import { selectorCartItems , selectorTotalCart } from '../../redux/selector';

const CheckoutPage = () => {

    const cartItems = useSelector ( selectorCartItems ) ;
    const total = useSelector ( selectorTotalCart ) ;
 
    return (
        <div className='checkout-page'>
          <div className='checkout-header'>
            <div className='header-block'>
              <span>Product</span>
            </div>
            <div className='header-block'>
              <span>Description</span>
            </div>
            <div className='header-block'>
              <span>Quantity</span>
            </div>
            <div className='header-block'>
              <span>Price</span>
            </div>
            <div className='header-block'>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className='total'>TOTAL: ${total}</div>
        </div>
      );
}

export default CheckoutPage;