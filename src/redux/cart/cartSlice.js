import { createSlice } from "@reduxjs/toolkit";
import { handleAddToCart } from "./cartSlice.utils";

export const cartSlice = createSlice({
    name : "cart" ,
    initialState : {
        cartItems : [] ,
    } ,
    reducers : {
        addToCart : ( state , action ) => {
            state.cartItems = handleAddToCart( state.cartItems , action.payload ) ;
        }
    }
})

export default cartSlice.reducer