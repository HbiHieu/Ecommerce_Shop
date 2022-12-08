import React, { useContext } from 'react'
import "./collectionItems.styles.scss"
import  Button  from "../Button/Button.component"

import { cartSlice } from '../../redux/cart/cartSlice'
import { useDispatch } from 'react-redux'
import { AppContext } from '../../context'

export default function CollectionItem({ id , name , price , imageUrl }) {

   const { setToastState } = useContext(AppContext) ;  
   const dispatch = useDispatch() ; 

   const handleAddToCart = () => {
     dispatch(
      cartSlice.actions.addToCart(
        {
        id ,
        name ,
        price ,
        imageUrl ,
        }
      )
     )
     setToastState( { isShow:true , message : "Added to cart!" } ) ;
   }

  return (
    <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{`${price}$`}</span>
    </div>
     <Button
     onClick = {handleAddToCart} 
     >ADD TO CART</Button>
  </div>
  )
}
