import { createSelector } from "reselect";

export const selectorCartItems = (state) => state.cartSlice.cartItems ;

export const selectorTotalCart = createSelector(
    selectorCartItems ,
    ( cartItems ) => {
        return cartItems.reduce( (total,item) => {
            return total + ( item.quantity * item.price ) ;
        },0)
    }
)

