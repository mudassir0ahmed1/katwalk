import React from 'react'

const Price = () => {
     const addActive =(e)=>{
         let el = e.target.parentElement
         el.classList.toggle('active')
     }
    return (
        <div className='product_filter_dropdown product_price_color_dropdown'>
                           <span className='product_filter_reset'>Reset</span>
                       <div className="price_filters">
                           <div className="price_filter">
                               <input type="checkbox" id='sar0-200' name='sar0-200' />
                               <label  onClick={addActive} htmlFor="sar0-200">SAR 0 - 200</label>
                           </div>
                           <div className="price_filter">
                               <input type="checkbox" id='sar200-400' name='sar200-400' />
                               <label  onClick={addActive} htmlFor="sar200-400">SAR 200 - 400</label>
                           </div>
                           <div className="price_filter">
                               <input type="checkbox" id='sar400-600' name='sar400-600' />
                               <label onClick={addActive}  htmlFor="sar400-600">SAR 400 - 600</label>
                           </div>
                           <div className="price_filter">
                               <input type="checkbox" id='sar>1000' name='sar>1000' />
                               <label  onClick={addActive} htmlFor="sar>1000"> &#62; SAR 1000</label>
                           </div>
                       </div>
        </div>
    )
}

export default Price
