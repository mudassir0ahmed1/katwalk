import React from 'react'

const Colour = () => {
    return (
        <div className='product_filter_dropdown product_filter_color_dropdown'>
                           <span className='product_filter_reset'>Reset</span>
                       <div className="colour_filters">
                           <div className="colour_filter">
                               <input type="checkbox" id='Neutral' name='Neutral' />
                               <label style={{backgroundColor:'#222'}}  htmlFor="Neutral">Neutral</label>
                           </div>
                           <div className="colour_filter">
                               <input type="checkbox" id='dark' name='dark' />
                               <label style={{backgroundColor:'#000'}} htmlFor="dark">Dark</label>
                           </div>
                           <div className="colour_filter">
                               <input type="checkbox" id='red' name='red' />
                               <label style={{backgroundColor:'red'}} htmlFor="red">Red</label>
                           </div>
                           <div className="colour_filter">
                               <input type="checkbox" id='green' name='green' />
                               <label style={{backgroundColor:'green'}} htmlFor="green">Green</label>
                           </div>
                           <div className="colour_filter">
                               <input type="checkbox" id='blue' name='blue' />
                               <label style={{backgroundColor:'blue'}} htmlFor="blue">Blue</label>
                           </div>
                           <div className="colour_filter">
                               <input type="checkbox" id='light' name='light' />
                               <label style={{backgroundColor:'indigo'}} htmlFor="light">Light</label>
                           </div>
                       </div>
        </div>
    )
}

export default Colour
