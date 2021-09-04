import React from 'react'

const SortBy = () => {
    const addActive =(e)=>{
          let el = e.target.parentElement
          el.classList.toggle('active')
    }
    return (
        <div className='product_filter_dropdown product_filter_sort_dropdown'>
                  <div className="product_filter_sort">
                       <input type="checkbox" id='what_new' name='what_new'/>
                       <label onClick={addActive} htmlFor='what_new'>What's New</label>
                </div>    
                  <div className="product_filter_sort">
                       <input type="checkbox" id='best_seller' name='best_seller'/>
                       <label onClick={addActive} htmlFor='best_seller'>Best Seller</label>
                </div>    
                  <div className="product_filter_sort">
                       <input type="checkbox" id='high_to_low' name='high_to_low'/>
                       <label onClick={addActive} htmlFor='high_to_low'>Price from high to low</label>
                </div>    
                  <div className="product_filter_sort">
                       <input type="checkbox" id='low_to_high' name='low_to_high'/>
                       <label onClick={addActive} htmlFor='low_to_high'>Price from low to high</label>
                </div>    
        </div>
    )
}

export default SortBy
