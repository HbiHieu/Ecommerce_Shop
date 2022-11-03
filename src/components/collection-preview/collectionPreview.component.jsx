import React from 'react'
import "./collectionPreview.styles.scss"

import CollectionItems from '../collection-items/collectionItems.component'

export default function CollectionPreview( { title , items } ) {
  return (
    <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItems key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
  )
}
