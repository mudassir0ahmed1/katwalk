import React, { useRef } from 'react'
import logo from '../../assets/images/katwalk_logo.svg'
import './layout.css'
import ddIcon from '../../assets/imgs/dd.svg'
import menuIcon from '../../assets/images/mysvgs/menu.svg'
import SideBar from '../sidebar/SideBar'
import CartSideBar from '../sidebar/CartSideBar'
import { Link } from 'react-router-dom'


const Header = () => {

  let rtl = false
  const openSideBar = () => {
    document.querySelector('.sidebar_layer').classList.add('active')
   
  }
 const open_cart_sidebar =()=>{
      document.querySelector('.cart_sidebar').classList.add('active')
}
let arabicLogo = "https://katwalk.sa/v3/public/assets/images/katwalk_logo_arabic.svg"
 
let contentBasedOnLang = rtl?{
  logo: arabicLogo,
  lang_title:  "English",
  textList: [
    "ما الجديد",
    "بيسبوك",
    "سوق",
    "المصممات",
    "عباءات"
  ],
  newdd:[
    "اتجاهات الجيب",
    "الباستيل",
    'مطبوعات',
    "روابط",
  ],
  shopdd:[
    {
      listHeading:'تسوق حسب الاسلوب',
      listItems:["روابط","روابط","روابط","روابط",]
    },
    {
      listHeading:'تسوق حسب ',
      listItems:["روابط","روابط","روابط","روابط",]
    },
    {
      listHeading:'تسوق حسب الاتجاه',
      listItems:["روابط","روابط","روابط","روابط",]
    },
  ],
  bagEmptyDD:[
    "حقيبتي",
    "لا توجد منتجات في العربة."
  ],
  sidebarListTwo:[
    "معلومات عنا",
    "اتصل بنا ",
    "بيع في katwalk",
    "أسئلة وأجوبة",
    "سياسة الخصوصية والشروط والأحكام"
  ]

}:{
  logo: logo,
  lang_title:  "العربية",
  textList: [
    "What's New?",
    "Bespoke",
    "Shop",
    "Designers",
    "Outlets"
  ],
  newdd:[
    "Pocket Trends",
    "Pastels",
    'Prints',
    "Ties",
  ],
  shopdd:[
    {
      listHeading:'Shop By Style',
      listItems:["Ties","Ties","Ties","Ties",]
    },
    {
      listHeading:'Shop By Occassion',
      listItems:["Ties","Ties","Ties","Ties",]
    },
    {
      listHeading:'Shop By Trend',
      listItems:["Ties","Ties","Ties","Ties",]
    },
  ],bagEmptyDD:[
    "My Bag",
    "No products in the cart"
  ],
  sidebarListTwo:[
    "About Us",
    "Contact Us",
    "Sell at katwalk",
    "FAQs",
    "Privacy Policy, Terms & Condition"
  ]

}

 return (
<>
    <nav>
      <div className="brandLogo">
        <Link to='/'>
           <img src={contentBasedOnLang.logo} alt="Katwalk" />
        </Link>
      </div>
      <ul className='navTextList hideTablet'>
          <li className='listItemNew'>
            <Link to='whats-new'>
                {contentBasedOnLang.textList[0]}
            </Link>
             <img src={ddIcon} alt="" />
      <div className="navDropDownContainer">
          <div className='navDropDownMenu '>
                  <ul>
                    <li> {contentBasedOnLang.newdd[0]}</li>
                    <li>{contentBasedOnLang.newdd[3]}</li> 
                  </ul>
                  <ul>
                    <li>{contentBasedOnLang.newdd[2]}</li>
                  </ul>
                  <ul>
                    <li>{contentBasedOnLang.newdd[1]}</li>
                  </ul>
          </div>
      </div>
          </li>
          <li>{contentBasedOnLang.textList[1]}</li>
          <li className='listItemShop'>{contentBasedOnLang.textList[2]}
             <img src={ddIcon} alt="" />
         <div className="navDropDownContainer shopddcontainer">

          <div className='navDropDownMenu '>
                  <ul>
                  
                    <li style={{textTransform:'uppercase'}}><strong>{contentBasedOnLang.shopdd[0].listHeading}</strong></li>
                    <li>{contentBasedOnLang.shopdd[0].listItems[0]}</li> 
                    <li>{contentBasedOnLang.shopdd[0].listItems[1]}</li> 
                    <li>{contentBasedOnLang.shopdd[0].listItems[2]}</li> 
                    <li>{contentBasedOnLang.shopdd[0].listItems[3]}</li> 
                  </ul>
                  <ul>
                    <li style={{textTransform:'uppercase'}}><strong>{contentBasedOnLang.shopdd[1].listHeading}</strong></li>
                    <li>{contentBasedOnLang.shopdd[0].listItems[0]}</li> 
                    <li>{contentBasedOnLang.shopdd[1].listItems[1]}</li> 
                    <li>{contentBasedOnLang.shopdd[1].listItems[2]}</li> 
                    <li>{contentBasedOnLang.shopdd[1].listItems[3]}</li> 
                  </ul>
                  <ul>
                    <li style={{textTransform:'uppercase'}}><strong>{contentBasedOnLang.shopdd[2].listHeading}</strong></li>
                    <li>{contentBasedOnLang.shopdd[2].listItems[0]}</li> 
                    <li>{contentBasedOnLang.shopdd[2].listItems[1]}</li> 
                    <li>{contentBasedOnLang.shopdd[2].listItems[2]}</li> 
                    <li>{contentBasedOnLang.shopdd[2].listItems[3]}</li> 
                  </ul>
                  
          </div>
         </div>
          </li>
          <li>
            <Link to='/designer-detail'>
            {contentBasedOnLang.textList[3]}
            </Link>
            </li>
          <li>{contentBasedOnLang.textList[4]}</li>
        </ul>
        <ul className='navIconList'>
            <li>
            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 18.4 17.9">
              <path id="Path_1" className="st9" d="M17.1,16l-3.8-3.8c2.4-2.8,2-6.9-0.7-9.3s-6.9-2-9.3,0.7s-2,6.9,0.7,9.3c2.5,2.1,6.2,2.1,8.6-0.1  l3.8,3.8c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.5C17.3,16.2,17.2,16,17.1,16L17.1,16z M2.7,7.8c0-3.1,2.5-5.7,5.7-5.7  s5.7,2.5,5.7,5.7c0,3.1-2.5,5.7-5.7,5.7S2.7,11,2.7,7.8C2.7,7.8,2.7,7.8,2.7,7.8z" />
            </svg>
      </li>
            <li onClick={open_cart_sidebar}>
            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 19.1 20.2" >
                <g id="group_3">
                  <path id="Path_4" d="M3.6,6.1v9.7l0,0l0,0c0.1,1.4,1.3,2.4,2.7,2.4h7.2c1.4,0.1,2.6-1,2.7-2.4V6.1c0-0.2-0.2-0.3-0.4-0.3h-2.3V5.6   c0-2-1.6-3.6-3.5-3.6S6.3,3.7,6.3,5.6v0.1H3.9C3.7,5.8,3.6,5.9,3.6,6.1C3.6,6.1,3.6,6.1,3.6,6.1z M13.4,17.5H6.2   c-0.9,0.1-1.8-0.6-1.9-1.6l0-9.4h2v1.7c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4l0,0V6.6h5.6v1.7c0,0.2,0.2,0.4,0.4,0.4   c0,0,0,0,0,0c0.2,0,0.4-0.2,0.4-0.4c0,0,0,0,0,0l0,0V6.6h2v9.4C15.3,16.9,14.4,17.6,13.4,17.5C13.4,17.5,13.4,17.5,13.4,17.5z    M12.6,5.8H7V5.7C7.1,4.1,8.5,3,10,3.1c1.4,0.1,2.5,1.2,2.6,2.6L12.6,5.8z" />
                </g>
             </svg>
             2
             
             <ul className='bagDropDown hideTablet'>
                <li className='bag_drop_down_heading'>{contentBasedOnLang.bagEmptyDD[0]}</li>
                <li>{contentBasedOnLang.bagEmptyDD[1]}</li>
              </ul>
           
            </li>
            <li className='hideTablet'>
            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 20.2 18.8" >
        <g id="like-6">
          <path id="Path_6-6" d="M19,7.1c-0.2-2.7-2.1-4.6-4.5-4.6c-1.6,0-3,0.8-3.8,2.2C9.9,3.3,8.5,2.5,6.9,2.5c-2.4,0-4.2,1.9-4.5,4.6   c-0.1,0.6,0,1.2,0.1,1.8c0.4,1.5,1.2,2.8,2.3,3.8l5.8,5.2l5.9-5.2c1.1-1,1.9-2.3,2.3-3.8C19,8.3,19.1,7.7,19,7.1z M18.2,8.7   c-0.3,1.4-1.1,2.6-2.1,3.5L10.7,17l-5.4-4.9c-1-0.9-1.8-2.2-2.1-3.5c-0.1-0.5-0.2-1-0.1-1.5l0,0c0-2.1,1.7-3.9,3.8-4   c1.5,0,2.9,1,3.4,2.4l0.3,0.7L11,5.6c0.6-1.4,2-2.4,3.5-2.4c2,0,3.7,1.7,3.9,4.1C18.4,7.7,18.4,8.2,18.2,8.7L18.2,8.7z" />
        </g>
      </svg> 1
            </li>
            <li className='hideTablet'>
             <Link to='/login'>
                <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 17 17.9">
                  <g id="user">
                    <path id="Path_5" d="M11.8,10.6L11.8,10.6l-0.3-0.1l-0.4-0.1l-0.3-0.1l-0.5-0.1h-0.2l0,0l-0.3-0.1H9.9H9.6H9.3c-0.3,0-0.7,0-1,0H8   H7.7l0,0H7.5H7.3l-0.4,0.1l-0.3,0.1H6.4c-0.2,0.1-0.4,0.2-0.7,0.3H5.7l0,0c-2.6,1.2-4.2,3.8-4.2,6.7v0.2v0.4h14.7v-0.4   c0-0.1,0-0.1,0-0.2C16.1,14.4,14.4,11.8,11.8,10.6z M2.1,17.3c0-2.6,1.5-4.9,3.8-6H6l0,0l0.6-0.2h0.1L6.9,11l0.4-0.1h0.2h0.2l0,0H8   h0.2c0.3,0,0.7,0,1,0h0.2h0.2h0.1l0.3,0.1l0,0h0.1l0.4,0.1l0.3,0.1c0.1,0,0.2,0.1,0.3,0.1l0.3,0.1l0,0c2.4,1.1,3.9,3.4,3.9,6   L2.1,17.3z M7,9l0.2,0.1h0.1l0.1,0.1c0.4,0.1,0.9,0.2,1.3,0.2l0,0c0.2,0,0.3,0,0.5,0h0.1h0.1h0.2h0.1h0.1h0.2h0.1h0.1l0.2-0.1h0.1   l0,0l0.3-0.1H11c0.1-0.1,0.2-0.1,0.3-0.2l0.2-0.1l0.2-0.1c1.1-0.9,1.7-2.2,1.7-3.5l0,0c0.1-2.6-1.9-4.7-4.5-4.8   C6.3,0.3,4.2,2.3,4.1,4.9v0.1c0,0.1,0,0.2,0,0.2C4.2,6.9,5.4,8.3,7,9L7,9z M4.9,4.6L4.9,4.6C5,2.4,6.9,0.8,9,0.9   c2,0.1,3.6,1.8,3.6,3.8l0,0c0,1.2-0.5,2.3-1.4,3l-0.2,0.1L10.9,8l-0.3,0.2h-0.1l-0.2,0.1h-0.1l-0.2,0.1H10H9.9H9.8H9.6H9.5H9.4H9.3   H9.2H8.8l0,0C8.4,8.3,8,8.2,7.6,8.1H7.5H7.4H7.3C5.8,7.5,4.9,6.1,4.9,4.6C4.9,4.6,4.9,4.6,4.9,4.6L4.9,4.6z" />
                  </g>
                </svg>
             </Link>
            </li>
            <li className="hideTablet">
            {contentBasedOnLang.lang_title}
            </li>
            <li  onClick={openSideBar} className='menuIcon hideLarge'>
                <img src={menuIcon} alt="MENU" />
            </li>
        </ul>
    </nav>
    <SideBar contentBasedOnLang={contentBasedOnLang}/>
    <CartSideBar/>
   
</>
    
  )
}

export default Header
