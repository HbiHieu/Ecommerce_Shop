import { createSlice } from "@reduxjs/toolkit";
import { handleAddItem, handleRemoveItem , handleClearItem } from "./cartSlice.utils";

export const cartSlice = createSlice({
    name : "cart" ,
    initialState : {
        cartItems : [] ,
    } ,
    reducers : {
        addToCart : ( state , action ) => {
            state.cartItems = handleAddItem( state.cartItems , action.payload ) ;
        } ,
        clearCartItem : ( state , action ) => {
            state.cartItems = handleClearItem( state.cartItems , action.payload )
        }
        ,
        removeCartItem : ( state , action ) => {
            state.cartItems = handleRemoveItem( state.cartItems , action.payload ) ;
        }
    }
})

export default cartSlice.reducer