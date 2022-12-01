import { current } from "@reduxjs/toolkit";

export const handleAddItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
    
    if (existingCartItem) {
        //console.log(current(existingCartItem)) ;
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

export const handleClearItem = ( cartItems , idCartItemToClear ) => {
    return cartItems.filter( (item) => item.id != idCartItemToClear ) ;
}

export const handleRemoveItem = ( cartItems , idCartItemToRemove ) => {
    const itemToRemove = cartItems.find( (item) => item.id === idCartItemToRemove ) ;
    if ( itemToRemove.quantity === 1 ) {
      return cartItems.filter( (item) => item.id != idCartItemToRemove ) ;
    }
    else {
      return cartItems.map( (item) => 
        item.id === idCartItemToRemove ? {...item , quantity : item.quantity - 1 } : item  
       )
    }
}

