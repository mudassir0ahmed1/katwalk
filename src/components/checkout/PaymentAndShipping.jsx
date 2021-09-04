import React from 'react'
import cardsImg from '../../assets/imgs/credit_cards.svg'

const PaymentAndShipping = () => {
    return (
        <div>
            <div className="checkout_header">
                <span>2. Payment And Shipping</span>
            </div>
            <div className="payment_and_shipping_container">
                <form >

                    <ul>
                        <li>
                            <input type="radio" name="payment_type" id="cash_on_delivery"  value='Cash on delivery'/>
                            <label htmlFor="cash_on_delivery">Cash on Delivery</label>
                        </li>
                        <li>
                            <input type="radio" name="payment_type" id="credit_card" value='Credit Card'  />
                            <label htmlFor="credit_card">Credit Card</label>
                        </li>
                        <li>
                            <input type="radio" name="payment_type" id="paypal"   value="Paypal"/>
                            <label htmlFor="paypal">Paypal</label>
                        </li>
                    </ul>
                </form>
                <div className='payment_footer'>
                    <img src={cardsImg} alt="" />
                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default PaymentAndShipping
