import React, { useEffect, useRef, useState } from 'react'
import arrow from '../../assets/imgs/left_chevron.svg'
import heartIcon from '../../assets/imgs/red_outlined_like.svg'
import filled_heart from '../../assets/imgs/filled_like.svg'
import img1 from '../../assets/1-min.jpg'
import img2 from '../../assets/2-min.jpg'
import img3 from '../../assets/3-min.jpg'
import img1a from '../../assets/1a-min.jpg'
import img2a from '../../assets/2a-min.jpg'
import img3a from '../../assets/3a-min.jpg'

const ProductSlider = ({pattern,setState,displayOnTop}) => {
       const [currentSlide,setCurrentSlide] = useState(1)
       const [mobile,setMobile] = useState(window.innerWidth < 600)
       useEffect(()=>{
           const handleResize =()=>{
               setMobile(window.innerWidth <600)
           }
           window.addEventListener('resize',handleResize)
           return ()=> window.removeEventListener('resize',handleResize)
       })
       const container = useRef() 
       let gallery1 =[
        img1,img1a,img1a,img1,img1,img1a
        ]
        let gallery2 = [
            img2,img2a,img2a,img2,img2,img2a
        ]
        let gallery3 = [
            img3,img3a,img3a,img3,img3,img3a
        ]
       const [gallery,setGallery] = useState(gallery1)
         useEffect(()=>{
            switch( pattern) {
                      case "Pattern 1":
                         setGallery(gallery1)
                      break;
                      case "Pattern 2":
                            setGallery(gallery2)
                      break;
                      case "Pattern 3":
                            setGallery(gallery3)
                      break;
                  }        
            },[pattern])
    
          const prevSlide =()=>{
                 let slides =mobile? gallery.length:  gallery.length/2
                 if(!mobile){ 
                 switch(currentSlide){
                      case 1:
                        container.current.style.transform = "translateX(-66.66%)"
                      break;
                      case 2:
                        container.current.style.transform = "translateX(0)"
                      break;
                      case 3:
                        container.current.style.transform = 'translateX(-33.33%)'  
                      break;
                    }
                }else{
                    switch(currentSlide){
                        case 1:
                          container.current.style.transform = "translateX(-84%)"
                        break;
                        case 2:
                          container.current.style.transform = "translateX(0%)"
                        break;
                        case 3:
                          container.current.style.transform = 'translateX(-16.66%)'  
                        break;
                        case 4:
                          container.current.style.transform = 'translateX(-33%)'  
                        break;
                        case 5:
                          container.current.style.transform = 'translateX(-50%)'  
                        break;
                        case 6:
                          container.current.style.transform = 'translateX(-67%)'  
                        break;
                      }
                }
                    setCurrentSlide(currentSlide !==1 ? currentSlide - 1: slides)
          }
          const nextSlide =()=>{
            let slides = mobile? gallery.length: gallery.length/2
            if(!mobile){
             switch(currentSlide){
                        case 1:
                            container.current.style.transform = 'translateX(-33.33%)' 
                        break;
                        case 2:
                            currentSlide === slides ?
                            container.current.style.transform = 'translateX(0)' 
                            :
                            container.current.style.transform = 'translateX(-66.66%)' 
                        break;
                        case 3:
                            container.current.style.transform = 'translateX(0)' 
                        break;
                    }
               }else{
                switch(currentSlide){
                    case 1:
                      container.current.style.transform = "translateX(-16%)"
                    break;
                    case 2:
                      container.current.style.transform = "translateX(-33%)"
                    break;
                    case 3:
                      container.current.style.transform = 'translateX(-50%)'  
                    break;
                    case 4:
                      container.current.style.transform = 'translateX(-67%)'  
                    break;
                    case 5:
                      container.current.style.transform = 'translateX(-84%)'  
                    break;
                    case 6:
                      container.current.style.transform = 'translateX(0%)'  
                    break;
                  }
               }
                    setCurrentSlide(currentSlide <slides ?currentSlide +1 :1)
                
            
          }
          const heartElm = useRef()
          const changeHeartToFilled = ()=>{
              heartElm.current.src = filled_heart
              heartElm.current.classList.add('active')
          }
          const  changeHeartToOulined =()=>{
              heartElm.current.src = heartIcon
              heartElm.current.classList.remove('active')
          }
    return (
        <div className='product_slider'>
        {  displayOnTop &&  <div className="product_detail_header">
                <h4>Aliya Designs</h4>
                <h6>Simple Elegant Abaya</h6>
            </div>}
                <img onClick={prevSlide} className='product_slide_arrow product_slide_arrow_left' src={arrow} alt="" />
                <img onClick={nextSlide} className='product_slide_arrow product_slide_arrow_right' src={arrow} alt="" />
               <img ref={heartElm} onMouseLeave={changeHeartToOulined} onMouseEnter={changeHeartToFilled} className='product_slide_heart_icon'  src={heartIcon} alt="" />
            <div ref={container} className="product_slider_container">
            
                {
                    gallery.map(img=>(
                        <div className="product_slide">
                            <img src={img} alt="" />
                        </div>
                    ))
                }
       
            </div>
        </div>
    )
}

export default ProductSlider
