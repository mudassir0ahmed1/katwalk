import React, { useState } from 'react'
import  closeIcon from '../../assets/imgs/close.svg' 
import img from '../../assets/images/slider/slider4.jpg'


const AddressModal = ({addresses,setAddresses}) => {
    const [state,setState]= useState({
        first_name:'',
        last_name:'',
        email:'',
        full_address:'',
        country:'',
        city:'',
        postal_code:'',
        mobile_number:''

    })
    const savingFormData =(e)=>{
             setState((prevState)=>{
                   return{
                       ...prevState,
                       [e.target.id]:e.target.value
                   }
             })
    }
    const closeModal =()=>{
        document.getElementById('address_modal_container').classList.remove('active')
    }
    const add_new_address_to_ui =()=>{
        console.log(addresses.length)
        document.querySelectorAll('.checkout_add_button')[addresses.length - 1].style.display ='none' 
        let newAddress = [...addresses, state]
       setAddresses(newAddress)
       closeModal()
    }
    return (
        <div id='address_modal_container' className="modal_container">
        <div className='size_modal'>
            <div className="size_modal_header">
                <h4>New Address</h4>
                <img onClick={closeModal} src={closeIcon} alt="" />
            </div>
            <div className="address_container">
                  <div className="check_out_details_form">
                    
                    <form>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input onChange={savingFormData} type="text" id='first_name' name='first_name' placeholder='First Name' value={state.first_name}  />
                        </div>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input onChange={savingFormData} type="text" id='last_name' name='last_name' placeholder='Last Name' value={state.last_name}  />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <input onChange={savingFormData} type="text" id='email' name='email' placeholder='Email' value={state.email}  />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <input onChange={savingFormData} type="text" id='full_address' name='full_address' placeholder='Full Address' value={state.full_address}  />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <select onChange={savingFormData} name="country" id="country" value={state.country}>
                                <option value="Saudia">Saudia</option>
                                <option value="Pakistan">Pakistan</option>
                            </select>
                        </div>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input onChange={savingFormData} type="text" id='city' name='city' placeholder='City' value={state.city}  />
                        </div>
                        <div className="check_out_inputWrapper check_out_inputWrapper_half">
                            <input onChange={savingFormData} type="text" id='postal_code' name='postal_code' placeholder='6440' value={state.postal_code}  />
                        </div>
                        <div className="check_out_inputWrapper ">
                            <input onChange={savingFormData} type="text" id='mobile_number' name='mobile_number' placeholder='+92 14321312' value={state.mobile_number}  />
                        </div>
                    </form>
                </div>
                  <button onClick={add_new_address_to_ui} className='address_save_button'>save</button>
            </div>
        </div>
    </div>
    )
}

export default AddressModal
