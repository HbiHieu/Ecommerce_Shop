import { createSelector } from "reselect";

export const selectorCollection = ( state ) => state.collectionSlice ;

export const getCollectionDetail = ( idCollection ) => createSelector(
    selectorCollection ,
    ( (collection) => {
        return collection[idCollection]
    } )
)