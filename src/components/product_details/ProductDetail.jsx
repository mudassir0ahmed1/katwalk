import React, { useState } from 'react'
import chevron_down from '../../assets/imgs/down-chevron.svg'
import sizeIcon from '../../assets/imgs/size.svg'
import plusIcon from '../../assets/imgs/plus.svg'
import minusIcon from '../../assets/imgs/close.svg'
import SizeModal from '../modals/SizeModal'
import ProductDetailHeader from './ProductDetailHeader'
import ddIcon from '../../assets/imgs/dd_grey.svg'
import whatsappIcon from '../../assets/imgs/whatsapp.svg'
import { Link } from 'react-router-dom'

const ProductDetail = ({ state, setState,displayHeaderOnTop }) => {
    
    
    const openDropDown = (id) => {
        let dropdown = document.getElementById(id.split(" ").join(''))
        dropdown.classList.toggle('active')
        let plusIconEl = dropdown.parentElement.querySelector('.plus_icon')
        
        if(plusIconEl) {if(dropdown.classList.contains('active')) { plusIconEl.setAttribute('src',minusIcon)} else{ plusIconEl.setAttribute('src',plusIcon)}
    }}
    const settingState = ({ state, value }) => {
        let dropdown = document.getElementById(state.split(" ").join(''))
        setState((prevState)=>{
           return   {
                  ...prevState,
                  [state]:value
              }
        })
        let plusIconEl = dropdown.parentElement.querySelector('.plus_icon')
        console.log(plusIconEl)
        if(plusIconEl){
            let dropdown = document.getElementById(
                state.split(" ").join(""))
                console.log(state,dropdown)
            dropdown.classList.toggle('active')
            dropdown.querySelectorAll('li')
                .forEach(item => item.classList.remove('active'))
            document.getElementById(value.split(' ').join("")).classList.toggle('active')
        }else{
            dropdown.querySelectorAll('li').forEach(item=>{
                item.classList.contains('active') && item.classList.remove('active')
                item.innerText  == value && item.classList.add('active')
                
            })
             
        }

    }
    const open_size_modal =()=>{
        document.getElementById('size_modal_container').classList.add('active')
    }
    return (
        <>
        <div className='product_detail'>
            <div className="product_detail_breadcrumb">
                <span>Home/ Abayas / Simple Elegant Abaya</span>
            </div>
         {displayHeaderOnTop || <ProductDetailHeader/>}
            <span className="product_detail_price">
                151 SAR
            </span>

            <div className="product_detail_input_wrapper product_detail_input_select_wrapper ">
                <span className='product_detail_input_label'>
                    Shelia Color:
                </span>
                <div onClick={() => openDropDown('pattern')} className='product_detail_dropdown_button'>
                    {state.pattern} <img className='plus_icon' src={plusIcon} alt="" />
                    <ul id='pattern' className='product_detail_dropdown'>
                        <li id='Pattern1' onClick={() => settingState({ state: "pattern", value: 'Pattern 1' })} className='active'>Pattern 1  <span style={{ backgroundImage: "url(https://digitalgraphiks.co.uk/demo/katwalk_v2/assets/images/bespoke/pattern1.jpg)" }}></span></li>
                        <li id='Pattern2' onClick={() => settingState({ state: "pattern", value: 'Pattern 2' })}>Pattern 2 <span style={{ backgroundImage: "url(https://digitalgraphiks.co.uk/demo/katwalk_v2/assets/images/bespoke/pattern2.jpg)" }}></span> </li>
                        <li id='Pattern3' onClick={() => settingState({ state: "pattern", value: 'Pattern 3' })}>Pattern 3  <span style={{ backgroundImage: "url(https://digitalgraphiks.co.uk/demo/katwalk_v2/assets/images/bespoke/pattern3.jpg)" }}></span></li>
                    </ul>
                </div>
            </div>


            <div className="product_detail_input_wrapper product_detail_input_select_wrapper ">
                <span className='product_detail_input_label'>
                    Color:
                </span>
                <div onClick={() => openDropDown('color')} className='product_detail_dropdown_button'>
                    {state.color} <img className='plus_icon' src={plusIcon} alt="" />
                    <ul id='color' className='product_detail_dropdown'>
                        <li id='Brown' onClick={() => settingState({ state: "color", value: 'Brown' })} className='active'>Brown <span style={{ backgroundColor: 'brown' }}></span> </li>
                        <li id='Ivory' onClick={() => settingState({ state: "color", value: 'Ivory' })}>Teal <span style={{ backgroundColor: 'Teal' }}></span> </li>
                        <li id='DarkBlue' onClick={() => settingState({ state: "color", value: 'Dark Blue' })}>Dodger Blue <span style={{ backgroundColor: 'blue' }}></span> </li>
                    </ul>
                </div>
            </div>


            <div className="product_detail_input_wrapper">
                <span className='product_detail_input_label'>
                    Size:
                </span>
                <div onClick={() => openDropDown('size')} className='product_detail_dropdown_button'>
                    {state.size} <img src={chevron_down} alt="" />
                    <ul id='size' className='product_detail_dropdown'>
                        <li className='active' onClick={() => settingState({state:'size',value: 50})}>50 </li>
                        <li onClick={() => settingState({state:'size',value: 52})}>52 </li>
                        <li onClick={() => settingState({state:'size',value: 54})}>54 </li>
                        <li onClick={() => settingState({state:'size',value: 56})}>56 </li>
                        <li onClick={() => settingState({state:'size',value: 58})}>58 </li>
                        <li onClick={() => settingState({state:'size',value: 60})}>60 </li>
                        <li onClick={() => settingState({state:'size',value: 62})}>62 </li>
                    </ul>
                </div>
            </div>
            <div className="product_detail_input_wrapper">
                <span className='product_detail_input_label'>
                    Closet Size:
                </span>
                <div onClick={() => openDropDown('closet')} className='product_detail_dropdown_button'>
                    {state.closet} <img src={chevron_down} alt="" />
                    <ul id='closet' className='product_detail_dropdown'>
                        <li className='active'  onClick={() => settingState({state:"closet",value: 52})}>52 </li>
                        <li onClick={() => settingState({state:"closet",value: 54})}>54 </li>
                        <li onClick={() => settingState({state:"closet",value: 56})}>56 </li>
                        <li onClick={() => settingState({state:"closet",value: 58})}>58 </li>
                        <li onClick={() => settingState({state:"closet",value: 60})}>60 </li>
                        <li onClick={() => settingState({state:"closet",value: 62})}>62 </li>
                    </ul>
                </div>
            </div>
            <div className="product_detail_input_wrapper alteration_and_size">
                <div className='alteration'>
                    <span className='circle'></span>
                    <span onClick={()=>openDropDown('alteration')}>

                    Any Alteration?
                    </span>
                    <span onClick={open_size_modal} className='sizeIcon'>
                        <img src={sizeIcon} alt="" />
                        Size Guide
                    </span>
                    <div id='alteration' className="alteration_dropdown">
                         <div className="product_detail_input_wrapper">
                             <input className='alteration_input' type="text" name='length' id='length' placeholder='l;' />
                             <label className='alteration_label' htmlFor="length">Length</label>
                         </div>
                         <div className="product_detail_input_wrapper">
                             <input className='alteration_input' type="text" name='bust' id='bust' placeholder='l;' />
                             <label className='alteration_label' htmlFor="bust">Bust</label>
                         </div>
                         <div className="product_detail_input_wrapper">
                             <input className='alteration_input' type="text" name='sleeve_from_neck' id='sleeve_from_neck' placeholder='l;' />
                             <label className='alteration_label' htmlFor="sleeve_from_neck">Sleeve From Neck</label>
                         </div>
                        <div className="product_detail_input_wrapper">
                            <span className='product_detail_input_label'>
                                SHEILA LENGTH:
                            </span>
                            <div onClick={() => openDropDown('sheilaLength')} className='product_detail_dropdown_button'>
                                {state.sheilaLength} <img src={chevron_down} alt="" />
                                <ul id='sheilaLength' className='product_detail_dropdown'>
                                    <li  className='active' onClick={() => settingState({ state: 'sheilaLength', value: 52 })}>52 </li>
                                    <li onClick={() => settingState({ state: 'sheilaLength', value: 54 })}>54 </li>
                                    <li onClick={() => settingState({ state: 'sheilaLength', value: 56 })}>56 </li>
                                    <li onClick={() => settingState({ state: 'sheilaLength', value: 58 })}>58 </li>
                                    <li onClick={() => settingState({ state: 'sheilaLength', value: 60 })}>60 </li>
                                    <li onClick={() => settingState({ state: 'sheilaLength', value: 62 })}>62 </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="product_detail_input_wrapper">
                    <button className='product_detail_add_to_bag_button'>
                        <Link to='/check_out' >
                                    Add To Bag
                        </Link>
                    </button>
            </div>
            <div className="product_detail_input_wrapper">
                <div className='need_help'>Need Help?
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
                </div >
            </div>
            
                <div onClick={()=>openDropDown('desList')} className='product_detail_footer_input_wrapper'>
                    <span>Description</span>
                    <img src={ddIcon} alt="" />
                    <ul id='desList' className='product_detail_footer_dropdown'>
                        <li><span>Product Type</span>Made-To-Measure</li>
                        <li><span>Fabric Type</span>Linen</li>
                        <li><span>Fabric Weight</span>Cool Lightweight</li>
                        <li><span>Style</span>Plain</li>
                    </ul>
                </div>
            
            
                <div onClick={()=>openDropDown('size_fit_list')} className='product_detail_footer_input_wrapper oneline_dropdown'>
                    <span>Size &#38;  Fit</span>
                    <img src={ddIcon} alt="" />
                    <ul id='size_fit_list' className='product_detail_footer_dropdown'>
                        <li><span>Size</span>Regular Fit</li>
                    </ul>
                </div>
            
            
                <div onClick={()=>openDropDown('care_inst_list')} className='product_detail_footer_input_wrapper oneline_dropdown'>
                    <span>Care Instructions</span>
                    <img src={ddIcon} alt="" />
                    <ul id='care_inst_list' className='product_detail_footer_dropdown'>
                        <li><span>Care Instructions</span>Steam Iron</li>
                    </ul>
                </div>
             
            
                <div onClick={()=>openDropDown('shopping_detail_list')} className='product_detail_footer_input_wrapper oneline_dropdown'>
                    <span>Shipping &#38; Returns</span>
                    <img src={ddIcon} alt="" />
                    <ul id='shopping_detail_list' className='product_detail_footer_dropdown'>
                        <li><span>Shipping &#38; returns</span>2-5 Business Days</li>
                    </ul>
                </div>
                <div  className='product_detail_footer_input_wrapper whatsapp_share'>
                    <span>Share </span>
                    <img src={whatsappIcon} alt="" />
                    
                </div>
             
        </div>
         <SizeModal/>
         </>
  )
}

export default ProductDetail
