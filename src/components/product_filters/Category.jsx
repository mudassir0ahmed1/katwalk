import React from 'react'
import tick from '../../assets/imgs/checked.svg'

const Category = () => {
    return (
        <div className='product_filter_dropdown'>
                           <span className='product_filter_reset'>Reset</span>
                           <div className='filter-inputs'>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='casual_look' id='casual_look' />
                                      <label htmlFor="casual_look">Casual Look</label>
                                      <img src={tick} alt="" />
                                  </div>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='formal' id='formal' />
                                      <label htmlFor="formal">Formal</label>
                                      <img src={tick} alt="" />
                                  </div>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='night_out' id='night_out' />
                                      <label htmlFor="night_out">Night Out</label>
                                      <img src={tick} alt="" />
                                  </div>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='pocket_trend' id='pocket_trend' />
                                      <label htmlFor="pocket_trend">Pocket Trend</label>
                                      <img src={tick} alt="" />
                                  </div>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='pastel' id='pastel' />
                                      <label htmlFor="pastel">Pastel</label>
                                      <img src={tick} alt="" />
                                  </div>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='prints' id='prints' />
                                      <label htmlFor="prints">Prints</label>
                                      <img src={tick} alt="" />
                                  </div>
                                  <div className="filter_input_wrapper">
                                      <input type="checkbox" name='outlets' id='outlets' />
                                      <label htmlFor="outlets">Outlets</label>
                                      <img src={tick} alt="" />
                                  </div>
                           </div>
                   </div>
    )
}

export default Category
