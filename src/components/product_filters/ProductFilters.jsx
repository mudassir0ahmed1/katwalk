import React, { useEffect, useState } from 'react'
import dd from '../../assets/imgs/down-chevron.svg'
import './styles.css'
import Category from './Category'
import Designers from './Designers'
import Size from './Size'
import Colour from './Colour'
import Price from './Price'
import SortBy from './SortBy'
import plusIcon from '../../assets/imgs/plus.svg'
import minusIcon from '../../assets/imgs/minus-sign.svg'

const ProductFilters = () => {
       const [small,setSmall] = useState(window.innerWidth < 768)
       const open_dropdown = (e) => {
              //      let dropdowns = document.querySelectorAll('.product_filter_dropdown_header')
              //       dropdowns.forEach(dropdown=> dropdown != e.target && dropdown.classList.remove('active'))
              //       console.log()
              let dropdown = e.target
              dropdown.classList.toggle('active')
              if (window.innerWidth < 768) {

                     document.querySelectorAll('.plusIcon')
                     .forEach(el => {
                            console.log(el)
                            if (el.parentElement.classList.contains('active')) {
                                   
                                   el.setAttribute('src', minusIcon)
                            }
                            else {  el.setAttribute('src', plusIcon) }
                     })
              }
       }
       const toggleFilters =()=>{
              document.querySelector('.product_filter_main_dropdown').classList.toggle('active')
       }
       useEffect(()=>{
              const settingSmall =()=>{
                  setSmall(window.innerWidth < 768)
              }
         window.addEventListener('resize',settingSmall)
         return ()=> window.removeEventListener('resize',settingSmall)
       },[])
       return (
       <>
            { small  ?<div className="product_filters_mobile">
                     <h4>What's New</h4>
                     <span onClick={toggleFilters}>Filters</span>
                     <span>Reset All Filters</span>
                     <ul className='product_filter_main_dropdown'>
                            <li onClick={open_dropdown} >
                                   <img className='plusIcon' src={plusIcon} alt="" />
                                   Category
                                   <Category />
                            </li>
                            <li onClick={open_dropdown}>
                                   <img className='plusIcon' src={plusIcon} alt="" />
                                   Designer
                                   <Designers />
                            </li>
                            <li onClick={open_dropdown}>
                                   <img className='plusIcon' src={plusIcon} alt="" />
                                   Size
                                   <Size />
                            </li>
                            <li onClick={open_dropdown}>
                                   <img className='plusIcon' src={plusIcon} alt="" />
                                   Colour
                                   <Colour />
                            </li>
                            <li onClick={open_dropdown}>
                                   <img className='plusIcon' src={plusIcon} alt="" />
                                   Price
                                   <Price />
                            </li>
                            <li onClick={open_dropdown}>
                                   <img className='plusIcon' src={plusIcon} alt="" />
                                   Sort By
                                   <SortBy />
                            </li>
                            <li>
                                   <button>Apply</button>
                            </li>
                     </ul>
              </div>
:
              <div className="product_filters_container">
              
              <div className='product_filters'>
                  <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                         <span>Category</span>
                         <img src={dd} alt="" />
                         <Category/>
                  </div>
                  <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                         <span>Designers</span>
                         <img src={dd} alt="" />
                         <Designers/>
                  </div>
                  <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                         <span>Size</span>
                         <img src={dd} alt="" />
                         <Size/>
                  </div>
                  <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                         <span>Colour</span>
                         <img src={dd} alt="" />
                         <Colour/>
                  </div>
                  <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                         <span>Price</span>
                         <img src={dd} alt="" />
                         <Price/>
                  </div>
                  <div onClick={open_dropdown} className='product_filter_dropdown_header'>
                         <span>Sort by</span>
                         <img src={dd} alt="" />
                    <SortBy/>
                  </div>
              </div> 
               </div>}
         </>
       )
}

export default ProductFilters
