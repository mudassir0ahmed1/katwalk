import React, { useState } from 'react'
import searchIcon from '../../assets/imgs/search.svg'
import tick from '../../assets/imgs/checked.svg'

const Designers = () => {
    const [searchedItem,setSearchedItem] = useState('')
    const handleChange =(e)=>{
      setSearchedItem(e.target.value)
    }  

    return (
        <div className='product_filter_dropdown'>
        <div className='product_filter_search'>
            <input onChange={handleChange} value={searchedItem} id='searched_item' name='searched_item'  type="text" />
            <img src={searchIcon} alt="" />
        </div>
        <div className='filter-inputs'>

               <div className="filter_input_wrapper filter_input_wrapper_designers">
                   <div className='filter_input_alphabet'>
                         A
                   </div>
                     <div className='filter_input_designer_div2'>
                        <input type="checkbox" name='aliya_designs' id='aliya_designs' />
                        <label htmlFor="aliya_designs">Aliya Designs</label>
                        <img src={tick} alt="" />
                     </div>
               </div>
               <div className="filter_input_wrapper filter_input_wrapper_designers">
                   <div className='filter_input_alphabet'>
                        
                   </div>
                     <div className='filter_input_designer_div2'>
                        <input type="checkbox" name='aliyan_designs' id='aliyan_designs' />
                        <label htmlFor="aliyan_designs">Aliyan Designs</label>
                        <img src={tick} alt="" />
                     </div>
               </div>
               <div className="filter_input_wrapper filter_input_wrapper_designers">
                   <div className='filter_input_alphabet'>
                         
                   </div>
                     <div className='filter_input_designer_div2'>
                        <input type="checkbox" name='ahmet_designs' id='ahmet_designs' />
                        <label htmlFor="ahmet_designs">Ahmet Designs</label>
                        <img src={tick} alt="" />
                     </div>
               </div>
               <div className="filter_input_wrapper filter_input_wrapper_designers">
                   <div className='filter_input_alphabet'>
                         B
                   </div>
                     <div className='filter_input_designer_div2'>
                        <input type="checkbox" name='boutique' id='boutique' />
                        <label htmlFor="boutique">Boutique</label>
                        <img src={tick} alt="" />
                     </div>
               </div>
               <div className="filter_input_wrapper filter_input_wrapper_designers">
                   <div className='filter_input_alphabet'>
                        
                   </div>
                     <div className='filter_input_designer_div2'>
                        <input type="checkbox" name='by_noman' id='by_noman' />
                        <label htmlFor="by_noman">By Noman</label>
                        <img src={tick} alt="" />
                     </div>
               </div>
               <div className="filter_input_wrapper filter_input_wrapper_designers">
                   <div className='filter_input_alphabet'>
                         I
                   </div>
                     <div className='filter_input_designer_div2'>
                        <input type="checkbox" name='iris' id='iris' />
                        <label htmlFor="iris">IRIS</label>
                        <img src={tick} alt="" />
                     </div>
               </div>
              
        </div>
</div>
    )
}

export default Designers
