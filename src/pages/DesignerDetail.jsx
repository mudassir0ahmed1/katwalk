import React from 'react'
import DesignerDetailsBanner from '../components/banner/DesignerDetails'
import ProductGrid from '../components/gridcards/ProductGrid'
import InstaFeed from '../components/instafeed/InstaFeed'
import Layout from '../components/layout/Layout'
import ProductFilters from '../components/product_filters/ProductFilters'
import ScrollToTop from '../components/ScrollToTop'

const DesignerDetail = () => {
    return (
        <Layout>
            <DesignerDetailsBanner/>
            <ProductFilters/>
            <ProductGrid/>
            <InstaFeed/>
            <ScrollToTop/>
        </Layout>
    )
}

export default DesignerDetail
