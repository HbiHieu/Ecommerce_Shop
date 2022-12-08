import { createSlice } from "@reduxjs/toolkit";
import  SHOP_DATA  from '../../pages/ShopPage/ShopData' 

export const CollectionData = createSlice({
    name :"collectionData" ,
    initialState : SHOP_DATA ,
})

export default CollectionData.reducer ;