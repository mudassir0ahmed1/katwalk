import React from 'react'
import tick from '../../assets/imgs/checked.svg'
const Size = () => {
    const addActive=(e)=>{
     let ele = e.target.parentElement
     ele.classList.toggle('active')
    }
    return (
        <div className='product_filter_dropdown product_search_filter_dropdown'>
                <div className="product_filter_clothing">
                    <div>
                        <span>Clothing</span>
                        <span className='product_filer_size_reset'>Reset</span>
                    </div>
                    <div>
                     <div className="input_product_filter_size">
                         <input onClick={addActive} type="checkbox"  id='xs' name='xs' />
                         <label htmlFor="xs">XS</label>
                     </div>
                     <div className="input_product_filter_size">
                         <input onClick={addActive} type="checkbox"  id='s' name='s' />
                         <label htmlFor="s">S</label>
                     </div>
                     <div className="input_product_filter_size">
                         <input onClick={addActive} type="checkbox"  id='m' name='m' />
                         <label htmlFor="m">M</label>
                     </div>
                     <div className="input_product_filter_size">
                         <input onClick={addActive} type="checkbox"  id='l' name='l' />
                         <label htmlFor="l">L</label>
                     </div>

                    </div>
                </div>
                 <div className="product_filter_size">
                     <div className="input_product_filter_size">
                         <input onClick={addActive} type="checkbox"  id='one_size' name='one_size' />
                         <label htmlFor="one_size">One Size</label>
                     </div>
                 </div>
        </div>
    )
}

export default Size
