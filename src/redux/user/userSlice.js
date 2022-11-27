import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name : 'user' ,
   initialState : {
    currentUser : null ,
   } ,
   reducers : {
     setUser : ( state , action ) => {
        console.log(action) ;
        state.currentUser = action.payload ;  
     }
   }
})

export default userSlice.reducer