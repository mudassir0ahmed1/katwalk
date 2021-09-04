import React from 'react'
import closeIcon from '../../assets/imgs/close.svg'
import cartImg from '../../assets/cartImg.jpg'

const CartSideBar = () => {
    const close_sidebar=()=>{
        document.querySelector('.cart_sidebar').classList.remove('active')
    }
    return (
        <div className='cart_sidebar'>
             <header><span>My Bag</span> <img onClick={close_sidebar} src={closeIcon} alt="" /></header>
             <ul className='cart_sidebar_lisitems'>
                 <li className='cart_sidebar_lisitem'>
                           <div className="cart_sidebar_listitem_img">
                           
                           <img src={cartImg} alt="" /></div>
                       
                     <div className='cart_sidebar_lisitem_details'>
                   <div className="cart_sidebar_list_heading">
                            <span >
                                Elegant Abaya
                            </span>
                     <img  src={closeIcon} alt="" />

                   </div>
                   
                            <div className='cart_sidebar_list_subheading'>
                                    Aliya Designs <span>EBA-67</span>
                            </div>
                            <span className='cart_sidebar_list_size'>
                                M
                            </span>
                            <div className='cart_sidebar_counter_and_price'>
                                <div className="cart_sidebar_counter">
                                    <span className='counter_up_down_disable'>-</span>
                                    <span>2</span>
                                    <span className='counter_up_down'>+</span>
                                </div>
                                <span className="cart_sidebar_list_price">
                                    900 SAR
                                </span>
                            </div>

                     </div>
                 </li>
             
                 <li className='cart_sidebar_lisitem'>
                           <div className="cart_sidebar_listitem_img">
                           
                           <img src={cartImg} alt="" /></div>
                       
                     <div className='cart_sidebar_lisitem_details'>
                   <div className="cart_sidebar_list_heading">
                            <span >
                                Elegant Abaya
                            </span>
                     <img  src={closeIcon} alt="" />

                   </div>
                   
                            <div className='cart_sidebar_list_subheading'>
                                    Aliya Designs <span>EBA-67</span>
                            </div>
                            <span className='cart_sidebar_list_size'>
                                M
                            </span>
                            <div className='cart_sidebar_counter_and_price'>
                                <div className="cart_sidebar_counter">
                                    <span className='counter_up_down_disable'>-</span>
                                    <span>2</span>
                                    <span className='counter_up_down'>+</span>
                                </div>
                                <span className="cart_sidebar_list_price">
                                    900 SAR
                                </span>
                            </div>

                     </div>
                 </li>
             
             </ul>
             <div className='cart_sidebar_footer'>
                 <div>
                     <span>Total</span>
                     <span>900 SAR</span>
                 </div>
                 <button data-text='checkout'></button>
             </div>
        </div>
    )
}

export default CartSideBar
