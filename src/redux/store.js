import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/cartSlice";
import userSlice from './user/userSlice' ;

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'cart',
    storage,
    whitelist: ['cartSlice']
  };

const rootReducer = combineReducers (
    {
    userSlice ,
    cartSlice ,
    }
)

const persistedReducer = persistReducer(persistConfig, rootReducer) ;

//export const store = persistStore( persistedReducer ) ;

export const store = configureStore({
    reducer : persistedReducer ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

// persistReducer
// serializableCheck