import React from 'react'

import "./ShopPage.styles.scss"

import SHOP_DATA from './ShopData' 
import CollectionPreview from '../../components/collection-preview/collectionPreview.component'


class ShopPage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            collection : SHOP_DATA ,
        }
    }
    render() {
    return (
        <div className='shop-page'>
            {
                this.state.collection.map( ( { id , ... otherCollectionProps} ) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ) )
            }
        </div>
    )
    }
}

export default ShopPage
