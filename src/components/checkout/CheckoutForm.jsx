import React, { useState } from 'react'
import OrderSummary from './OrderSummary'
import PaymentAndShipping from './PaymentAndShipping'
import UserAndBilling from './UserAndBilling'
import './styles.css'
import AddressModal from '../modals/AddressModal'

const CheckoutForm = () => {
    const [addresses,setAddresses] = useState([
        {
            first_name:'Mudassir',
            last_name:'Ahmed',
            email:'mj@digitalgraphiks.pk',
            full_address:'House # Fulana, Street Fulana near Fulana',
            country:'Pakistan',
            city:'Karachi',
            postal_code:'9440',
            mobile_number:'03008203106'
        }
    ])
    const addNewAddress =()=>{

    }
  

    return (
        <>
        <div className='check_out'>
            <div className="checkout_breadcrumb">
                <span>Home / Checkout</span>
            </div>
            <div className="check_out_container">
                <UserAndBilling addresses={addresses}/>
                <PaymentAndShipping/>
                <OrderSummary/>
            </div>
        </div>
        <AddressModal addresses={addresses} setAddresses={setAddresses}/>

        </>
    )
}

export default CheckoutForm
