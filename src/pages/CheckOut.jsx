import React from 'react'
import Layout from '../components/layout/Layout'
import InstaFeed from '../components/instafeed/InstaFeed'
import CheckoutForm from '../components/checkout/CheckoutForm'


const CheckOut = () => {
    return (
        <Layout>
            <CheckoutForm/>
            <InstaFeed/>
        </Layout>
    )
}

export default CheckOut
