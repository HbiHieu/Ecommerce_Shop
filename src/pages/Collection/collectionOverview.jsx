import React from 'react'

import CollectionItem from '../../components/collection-items/collectionItems.component';

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux';
import { getCollectionDetail } from '../../redux/collection/collection.selector';

import "./collectionOverview.styles.scss"

export default function CollectionOverview() {
   
    const param = useParams() ; 
    const items = useSelector( getCollectionDetail( param.category ) ) ;

    console.log(param , items) ;

    return (
        <div className='collection-page'>
          <h2 className='title'>{param.category.toUpperCase()}</h2>
          <div className='items'>
            {items.items.map(item => (
              <CollectionItem 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              imageUrl={item.imageUrl}
              price={item.price}
              />
            ))}
          </div>
        </div>
      );
}
