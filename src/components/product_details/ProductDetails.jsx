import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import ProductSlider from './ProductSlider'
import './styles.css'

const ProductDetails = () => {
    const [display,setDisplay] = useState(window.innerWidth < 600)
    
    useEffect(()=>{
            const handleResize =()=>{
                setDisplay(window.innerWidth <600)
            }
            window.addEventListener('resize',handleResize)
            return ()=> window.removeEventListener('resize',handleResize)
    })
    const [state,setState] = useState({
        color:'Brown',
        size:'50',
        closet:'52',
        pattern:'Pattern 1',
        sheilaLength:'52'
    })
    console.log(state)
    return (
        <div className='product_details'>
            <ProductSlider pattern={state.pattern} setState={setState} displayOnTop={display}/>
            <ProductDetail state={state} setState={setState} displayHeaderOnTop={display}/>
        </div>
    )
}

export default ProductDetails
