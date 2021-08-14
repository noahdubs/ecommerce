import React, { useState } from "react"
import { SHOPdata } from "./shop-data"
import CollectionPreview from "../../components/collection-preview/collection-preview.component"

const ShopPage = props => {
    const [shopData] = useState(SHOPdata)

    return (
        <div className="shop-page">
            {
                shopData.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview 
                        key={id}
                        {...otherCollectionProps}
                    />
                ))
            }

            
        </div>
    )
}

export default ShopPage