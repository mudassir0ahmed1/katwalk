import React, { useEffect, useRef } from 'react'
import arrow_up from '../assets/imgs/arrows.svg'

const ScrollToTop = () => {
    const scroll_to_top = useRef()
    useEffect(()=>{
        const handleScroll =()=>{
            let y = window.scrollY
            let height = window.innerHeight -100
            let width = window.innerWidth
            if(scroll_to_top.current){
            width > 900 && y > height && scroll_to_top?.current.classList.add('active')
            width < 900 &&  scroll_to_top?.current.classList.contains('active') && scroll_to_top?.current.classList.remove('active')
            y < height &&  scroll_to_top?.current.classList.contains('active') && scroll_to_top?.current.classList.remove('active')
        }
    }
      window.addEventListener('scroll',handleScroll)
      return ()=>{window.removeEventListener('scroll',handleScroll)}
    },[])
    const scrollTop =()=>{
         window.scrollTo(0,0)
     }
    return (
        <div ref={scroll_to_top} onClick={scrollTop} className='scroll_to_top'>
           <img src={arrow_up} alt="" /> 
        </div>
    )
}

export default ScrollToTop
