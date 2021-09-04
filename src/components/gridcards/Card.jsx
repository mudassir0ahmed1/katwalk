import React, { useRef, useState } from 'react'
import './styles.css'
import outlined_heart from '../../assets/imgs/red_outlined_like.svg'
import filled_heart from '../../assets/imgs/filled_like.svg'
import img1 from '../../assets/images/products/abaya1_1.jpg'
import img1Hover from '../../assets/images/products/abaya1.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
    const [heart,setHeart] = useState(outlined_heart)
    const heartElm = useRef()
    const changeHeartToFilled = ()=>{
        heartElm.current.src = filled_heart
        heartElm.current.classList.add('active')
    }
    const  changeHeartToOulined =()=>{
        heartElm.current.src = outlined_heart
        heartElm.current.classList.remove('active')
        
    }
    let rtl = false
    let contentBasedOnLang= rtl?{
        badge:'الجديد في',
        des:'توب بيج بأكمام طويلة مضلع',
        designer:'عالية المصمم'
        
    }:{
         badge:'New In',
         des:'Beige Ribbed Sleeve Long Sleeve Top',
         designer:'Aliya Designer'

    }
    return (
        <div className='GRIDCARD'>
                    <Link to='/product_details'>
                    </Link>
                    <div className="GRIDCARDIMG">
                            <div className="BADGE">{contentBasedOnLang.badge}</div>
                            <img ref={heartElm} onMouseLeave={changeHeartToOulined} onMouseEnter={changeHeartToFilled} src={heart} alt="" className="heart" />
                            <img className='CARDIMG' src={img1} alt="" />
                            <img className='CARDIMG CARDIMGHOVER' src={img1Hover} alt="" />
                    </div>
                    <div className="GRIDCARDCONTENT">
                        <p>{contentBasedOnLang.des}</p>
                        <h4>{contentBasedOnLang.designer}</h4>
                        <span>SAR 5</span>   
                    </div>
       
                </div>
    )
}

export default Card
