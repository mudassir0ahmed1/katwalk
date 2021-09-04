import React from 'react'
import instagram from '../../assets/images/mysvgs/instagram.svg'
import whatsapp from '../../assets/images/mysvgs/whatsapp.svg'

const Footer = () => {
    return (
        <footer>
            <div className="brandLogo">
                <img src='https://digitalgraphiks.co.uk/demo/katwalk_v2/assets/images/footer_icon.svg' alt="" />
                <div className="copyright">

                    <span>&#169; Katwalk 2021</span>
                </div>
            </div>
            <ul className='hideTablet'>
                <li>About Us</li>
                <li>Contact Us
                    <div className="contact_dropdown_container">
                    <div className="contact_dropdown">
                        <div className="phone_number">
                            <span className="contact_heading">phone number</span>
                            <span>+966 055 95 12 25</span>
                            <span>(WhatsApp, Viber)</span>
                        </div>
                        <div className="email">
                            <span className="contact_heading">email</span>
                           <span>info@katwalk.sa</span>
                        </div>
                        <div className="partnership_and_pr">
                            <span className="contact_heading">Partnership and pr</span>
                            <span>info@katwalk.sa</span>
                        </div>
                        <span className="feedback">Feedback</span>
                    </div>

                    </div>

                </li>
                <li>Sell at Katwalk</li>
                <li>FAQ</li>
                <li>Privacy Policy, Terms & Condition</li>
            </ul>
            <ul className='footer_social_list'>
                <li><img src={instagram} alt="" /></li>
                
                <li><img src={whatsapp} alt="" /></li>
                
            </ul>
        </footer>
    )
}

export default Footer
