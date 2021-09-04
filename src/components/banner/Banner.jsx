import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/images/slider/slider1.jpg'
import img2 from '../../assets/images/slider/slider2.jpg'
import img3 from '../../assets/images/slider/slider3.jpg'
import img4 from '../../assets/images/slider/slider4.jpg'
import './Banner.css'
import arrow from '../../assets/images/arrow.svg'

const Banner = () => {
    let rtl = false
    let s1 = useRef(null)
    let s2 = useRef(null)
    let s3 = useRef(null)
    let s4 = useRef(null)
    let [currentSlide,setCurrentSlide] = useState(0)

    useEffect(()=>{
     const interval = setInterval(()=>{
         nextSlide()
     },5000)
      return ()=> clearInterval(interval)
    },[currentSlide])
    const nextSlide =()=>{
        let slides = [s1,s2,s3,s4]
        slides.forEach(slide => slide.current.classList.remove('SLIDEACTIVE'))
        slides[currentSlide].current.classList.add('SLIDEACTIVE')
        setCurrentSlide(()=> currentSlide <4 ? currentSlide++ :0)
    }
    const prevSlide =()=>{
        let slides = [s1,s2,s3,s4]
        slides.forEach(slide => slide.current.classList.remove('SLIDEACTIVE'))
        slides[currentSlide].current.classList.add('SLIDEACTIVE')
        setCurrentSlide(()=> currentSlide !==0 ? currentSlide-- :3)
    }
    let contentBasedOnLang =rtl?
     {heading:"ما الجديد في المنتجات",
      subHeading:" أفضل مكان للعثور على أفضل المصممات",
      buttonText:'تسوق الآن'
    }

    :{
        heading: "What's New In Products",
        subHeading:'Best Place To Find Best Designers',
        buttonText:'Shop Now'
    }
    return (
        <div className="BANNER">
            <div className="SLIDER">
                <div ref={s1} className="SLIDEONE SLIDE SLIDEACTIVE">
                    <img src={img1} alt="" className="SLIDEIMG" />
                    <div className="SLIDECONTENT">
                         <h1>{contentBasedOnLang.heading}</h1>
                         <h3>{contentBasedOnLang.subHeading}</h3>
                         <button>{contentBasedOnLang.buttonText}</button>
                    </div>
                </div>
                <div ref={s2} className="SLIDETWO SLIDE">
                    <img src={img2} alt="" className="SLIDEIMG" />
                    <div className="SLIDECONTENT">
                         <h1>{contentBasedOnLang.heading}</h1>
                         <h3>{contentBasedOnLang.subHeading}</h3>
                         <button>{contentBasedOnLang.buttonText}</button>
                    </div>
                </div>
                <div ref={s3} className="SLIDETHREE SLIDE">
                    <img src={img3} alt="" className="SLIDEIMG" />
                    <div className="SLIDECONTENT">
                         <h1>{contentBasedOnLang.heading}</h1>
                         <h3>{contentBasedOnLang.subHeading}</h3>
                         <button>{contentBasedOnLang.buttonText}</button>
                    </div>
                </div>
                <div ref={s4} className="SLIDETHREE SLIDE">
                    <img src={img4} alt="" className="SLIDEIMG" />
                    <div className="SLIDECONTENT">
                         <h1>{contentBasedOnLang.heading}</h1>
                         <h3>{contentBasedOnLang.subHeading}</h3>
                         <button>{contentBasedOnLang.buttonText}</button>
                    </div>
                </div>
              <img onClick={prevSlide} src={arrow} alt="" className='ARROW arrowLeft' />
              <img onClick={nextSlide} src={arrow} alt="" className='ARROW arrowRight' />
            </div>
        </div>
  
    )
}

export default Banner
