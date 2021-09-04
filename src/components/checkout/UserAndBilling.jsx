import React from 'react'
import tick from '../../assets/imgs/checked.svg'
import SizeModal from '../modals/SizeModal'

const UserAndBilling = ({addresses}) => {
    const open_address_modal = ()=>{
          document.getElementById('address_modal_container').classList.add('active')
          
    }
  
    return (
        <>
         
            <div>
                <div className="checkout_header">
                    <span>1. User Info And Billing Address</span>
                </div>
           {  addresses.map(address=>   <div className="check_out_details_form">
                    <div className="check_out_details_form_header">
                        <div className="radio_for_address">
                            <input type="radio" name='address' id={address.email} />
                            <label htmlFor={address.email}></label>
                        </div>
                        <span>Billing Details</span>
                    </div>
                    <form>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input type="text" id='first_name' name='first_name' placeholder='First Name' value={address.first_name} readOnly />
                        </div>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input type="text" id='last_name' name='last_name' placeholder='Last Name' value={address.last_name} readOnly />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <input type="text" id='email' name='email' placeholder='Email' value={address.email} readOnly />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <input type="text" id='full_address' name='full_address' placeholder='Full Address' value={address.full_address} readOnly />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <select name="country" id="country" value={address.country}>
                                <option value="Saudia">Saudia</option>
                                <option value="Pakistan">Pakistan</option>
                            </select>
                        </div>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input type="text" id='city' name='city' placeholder='City' value={address.city} readOnly />
                        </div>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input type="text" id='postal_code' name='postal_code' placeholder='6440' value={address.postal_code} readOnly />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <input type="text" id='mobile_number' name='mobile_number' placeholder='6440' value={address.mobile_number} readOnly />
                        </div>
                        <div className="checkout_add_button">
                            <input type="checkbox" id={address.first_name} name={address.first_name} />
                            <label htmlFor={address.first_name}>Add New</label>
                            <img className='add_new_tick' src={tick} alt="" />
                            <button type='button' onClick={open_address_modal}>Add New Address</button>
                        </div>
                    </form>
               
                </div>
            ) } </div>
           
        </>
    )
}

export default UserAndBilling
