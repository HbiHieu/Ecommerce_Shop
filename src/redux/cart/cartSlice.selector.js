import { createSelector } from "reselect";

export const selectorCartItems = (state) => state.cart.cartItems ;

export const selectorTotalCart = createSelector(
    selectorCartItems ,
    ( cartItems ) => {
        return cartItems.reduce( (total,item) => {
            return total + ( item.quantity * item.price ) ;
        },0)
    }
)

