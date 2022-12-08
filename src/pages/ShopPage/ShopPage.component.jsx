import React from 'react'

import "./ShopPage.styles.scss"

import CollectionPreview from '../../components/collection-preview/collectionPreview.component'

import { useSelector } from 'react-redux'
import { selectorCollection } from '../../redux/collection/collection.selector' ;


export default function ShopPage() {

    const collection = useSelector( selectorCollection ) ;

    const items = Object.keys(collection).map( (keyCollection) => collection[keyCollection] ) ; 
    
    return (
        <div className='shop-page'>
            {
                items.map( ( { id , ... otherCollectionProps} ) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ) )
            }
        </div>
    );
}


