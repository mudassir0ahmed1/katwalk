import React from 'react'
import Layout from '../components/layout/Layout'
import InstaFeed from '../components/instafeed/InstaFeed'
import CardGrids from '../components/gridcards/GridCards'
import ProductDetailsContainer from '../components/product_details/ProductDetails'


const ProductDetails = () => {
    return (
        <Layout>
            <ProductDetailsContainer/>
                <CardGrids heading='Recommended' />
            <InstaFeed/>
        </Layout>
    )
}

export default ProductDetails
