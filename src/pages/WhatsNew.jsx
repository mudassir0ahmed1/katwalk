import React from 'react'
import ProductGrid from '../components/gridcards/ProductGrid'
import InstaFeed from '../components/instafeed/InstaFeed'
import Layout from '../components/layout/Layout'
import ProductFilters from '../components/product_filters/ProductFilters'
import ScrollToTop from '../components/ScrollToTop'


const WhatsNew = () => {
    return (
        <Layout>
            <h1>What's New</h1>
            <ProductFilters/>
            <ProductGrid/>
            <InstaFeed/>
            <ScrollToTop/>
        </Layout>
    )
}

export default WhatsNew
