import React, { useEffect, useRef } from 'react'
import Card from './Card'
import {gsap} from 'gsap'

const ProductGrid = () => {
     let cards = [
         [{a:1},{a:1},{a:1},{a:1}],
         [{a:1},{a:1},{a:1},{a:1}],
         [{a:1},{a:1},{a:1},{a:1}],
        ]
        
        let more_cards =[
            [{a:1},{a:1},{a:1},{a:1}],
            [{a:1},{a:1},{a:1},{a:1}],
            [{a:1},{a:1},{a:1},{a:1}],      
        ]
        let more_crds = useRef()
        let btn = useRef()
        let timeline = gsap.timeline()
        
        const addCards =()=>{
            timeline.paused(false)
        }
        
        useEffect(()=>{
             timeline.paused(true)
             timeline
             .to(btn.current, {
                 display:'none'
             })
             .from(more_crds.current,{
                 display:'none'
             })
             .from(more_crds.current.querySelectorAll('.GRIDCARD'),{
                 opacity:0,
                 stagger: .2,
                 
             })
        },[])
    return (
 
        <div className="GRIDCARDS">
            {/* <h4>Filters</h4> */}
            <div className="CARDCONTAINER">
                 {cards.map((card,index)=>
                       <div key={index} className="CardRow Grid4-2">
                           {card.map((crd,i)=><Card key={i}/>)}
                       </div>
                 )}
             </div>
                 <button ref={btn} onClick={addCards}  className='VIEWBTN PRODUCT_GRID_BTN' data-text='View More'></button>
                <div  ref={more_crds} className="CARDCONTAINER">

                    { more_cards.map((card,index)=>
                        <div   key={index} className="CardRow Grid4-2">
                            {card.map((crd,i)=><Card key={i}/>)}
                        </div>
                    )}
                 </div>
                 
        </div>
    )
}

export default ProductGrid
