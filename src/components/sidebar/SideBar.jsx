import React, { useRef } from 'react'

import closeIcon from '../../assets/images/sidebar/img1.png'
import like from '../../assets/images/sidebar/img3.png'
import user from '../../assets/images/sidebar/img4.png'
import instagram from '../../assets/images/sidebar/img5.png'
import whatsapp from '../../assets/images/sidebar/img6.png'
import dropdown from '../../assets/images/sidebar/dropdown.png'
import './styles.css'

const SideBar = ({sidebar ,contentBasedOnLang}) => {
    const what_new = useRef(null)
    const shop = useRef(null)
    const openDropDown =(dropdown)=>{
          dropdown !== 'shop' ? what_new.current.classList.toggle('active') :  shop.current.classList.toggle('active')
    }
    const closeSideBar =()=>{
        document.querySelector('.sidebar_layer').classList.remove('active')
    }
    return (
        <div className="sidebar_layer hideLarge">
              <div className="sidebar_close" onClick={closeSideBar}>
                <img src={closeIcon} alt="" />
              </div>
              <div className="sidebar active">
                   <header>
                       <span>{contentBasedOnLang.lang_title}</span>
                       <ul>
                           <li>
                           <svg style={{fill:'#fff',width:'18px',marginLeft:'.5rem'}} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 18.4 17.9">
                                <path id="Path_1" className="st9" d="M17.1,16l-3.8-3.8c2.4-2.8,2-6.9-0.7-9.3s-6.9-2-9.3,0.7s-2,6.9,0.7,9.3c2.5,2.1,6.2,2.1,8.6-0.1  l3.8,3.8c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.5-0.5C17.3,16.2,17.2,16,17.1,16L17.1,16z M2.7,7.8c0-3.1,2.5-5.7,5.7-5.7  s5.7,2.5,5.7,5.7c0,3.1-2.5,5.7-5.7,5.7S2.7,11,2.7,7.8C2.7,7.8,2.7,7.8,2.7,7.8z" />
                            </svg>
                           </li>
                           <li>
                           <svg  style={{fill:'#fff',width:'18px',marginLeft:'.5rem'}} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 20.2 18.8" >
                                <g id="like-6">
                                <path id="Path_6-6" d="M19,7.1c-0.2-2.7-2.1-4.6-4.5-4.6c-1.6,0-3,0.8-3.8,2.2C9.9,3.3,8.5,2.5,6.9,2.5c-2.4,0-4.2,1.9-4.5,4.6   c-0.1,0.6,0,1.2,0.1,1.8c0.4,1.5,1.2,2.8,2.3,3.8l5.8,5.2l5.9-5.2c1.1-1,1.9-2.3,2.3-3.8C19,8.3,19.1,7.7,19,7.1z M18.2,8.7   c-0.3,1.4-1.1,2.6-2.1,3.5L10.7,17l-5.4-4.9c-1-0.9-1.8-2.2-2.1-3.5c-0.1-0.5-0.2-1-0.1-1.5l0,0c0-2.1,1.7-3.9,3.8-4   c1.5,0,2.9,1,3.4,2.4l0.3,0.7L11,5.6c0.6-1.4,2-2.4,3.5-2.4c2,0,3.7,1.7,3.9,4.1C18.4,7.7,18.4,8.2,18.2,8.7L18.2,8.7z" />
                                </g>
                            </svg>
                            </li>
                           <li>
                           <svg style={{fill:'#fff',width:'18px',marginLeft:'.5rem'}} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 17 17.9">
                                <g id="user">
                                <path id="Path_5" d="M11.8,10.6L11.8,10.6l-0.3-0.1l-0.4-0.1l-0.3-0.1l-0.5-0.1h-0.2l0,0l-0.3-0.1H9.9H9.6H9.3c-0.3,0-0.7,0-1,0H8   H7.7l0,0H7.5H7.3l-0.4,0.1l-0.3,0.1H6.4c-0.2,0.1-0.4,0.2-0.7,0.3H5.7l0,0c-2.6,1.2-4.2,3.8-4.2,6.7v0.2v0.4h14.7v-0.4   c0-0.1,0-0.1,0-0.2C16.1,14.4,14.4,11.8,11.8,10.6z M2.1,17.3c0-2.6,1.5-4.9,3.8-6H6l0,0l0.6-0.2h0.1L6.9,11l0.4-0.1h0.2h0.2l0,0H8   h0.2c0.3,0,0.7,0,1,0h0.2h0.2h0.1l0.3,0.1l0,0h0.1l0.4,0.1l0.3,0.1c0.1,0,0.2,0.1,0.3,0.1l0.3,0.1l0,0c2.4,1.1,3.9,3.4,3.9,6   L2.1,17.3z M7,9l0.2,0.1h0.1l0.1,0.1c0.4,0.1,0.9,0.2,1.3,0.2l0,0c0.2,0,0.3,0,0.5,0h0.1h0.1h0.2h0.1h0.1h0.2h0.1h0.1l0.2-0.1h0.1   l0,0l0.3-0.1H11c0.1-0.1,0.2-0.1,0.3-0.2l0.2-0.1l0.2-0.1c1.1-0.9,1.7-2.2,1.7-3.5l0,0c0.1-2.6-1.9-4.7-4.5-4.8   C6.3,0.3,4.2,2.3,4.1,4.9v0.1c0,0.1,0,0.2,0,0.2C4.2,6.9,5.4,8.3,7,9L7,9z M4.9,4.6L4.9,4.6C5,2.4,6.9,0.8,9,0.9   c2,0.1,3.6,1.8,3.6,3.8l0,0c0,1.2-0.5,2.3-1.4,3l-0.2,0.1L10.9,8l-0.3,0.2h-0.1l-0.2,0.1h-0.1l-0.2,0.1H10H9.9H9.8H9.6H9.5H9.4H9.3   H9.2H8.8l0,0C8.4,8.3,8,8.2,7.6,8.1H7.5H7.4H7.3C5.8,7.5,4.9,6.1,4.9,4.6C4.9,4.6,4.9,4.6,4.9,4.6L4.9,4.6z" />
                                </g>
                            </svg>   
                            </li>
                       </ul>
                   </header>
                   <ul className='sidebar_first_list'>
                       <li className='what_dd'  ref={what_new}>{contentBasedOnLang.textList[0]} <img src={dropdown} alt="" onClick={()=> openDropDown()} />
                       <ul className='sidebar_dropdown'>
                           <li>{contentBasedOnLang.newdd[0]}</li>
                           <li>{contentBasedOnLang.newdd[1]}</li>
                           <li>{contentBasedOnLang.newdd[2]}</li>
                           <li>{contentBasedOnLang.newdd[3]}</li>
                       </ul>
                       </li>
                       <li>{contentBasedOnLang.textList[1]} </li>
                       <li className="shop_dd" ref={shop}>{contentBasedOnLang.textList[2]} <img onClick={()=>openDropDown("shop")} src={dropdown} alt="" />
                        <div className='sidebar_dropdown'>
                       <ul>
                           <li><strong>{contentBasedOnLang.shopdd[0].listHeading}</strong></li>
                           <li>{contentBasedOnLang.shopdd[0].listItems[0]}</li>
                           <li>{contentBasedOnLang.shopdd[0].listItems[1]}</li>
                           <li>{contentBasedOnLang.shopdd[0].listItems[2]}</li>
                           <li>{contentBasedOnLang.shopdd[0].listItems[3]}</li>
                       </ul>
                       <ul>
                           <li><strong>{contentBasedOnLang.shopdd[1].listHeading}</strong></li>
                           <li>{contentBasedOnLang.shopdd[1].listItems[0]}</li>
                           <li>{contentBasedOnLang.shopdd[1].listItems[1]}</li>
                           <li>{contentBasedOnLang.shopdd[1].listItems[2]}</li>
                           <li>{contentBasedOnLang.shopdd[1].listItems[3]}</li>
                       </ul>
                       <ul>
                           <li><strong>{contentBasedOnLang.shopdd[2].listHeading}</strong></li>
                           <li>{contentBasedOnLang.shopdd[2].listItems[0]}</li>
                           <li>{contentBasedOnLang.shopdd[2].listItems[1]}</li>
                           <li>{contentBasedOnLang.shopdd[2].listItems[2]}</li>
                           <li>{contentBasedOnLang.shopdd[2].listItems[3]}</li>
                       </ul>
                   
                       </div>
                       </li>
                       <li>{contentBasedOnLang.textList[3]}</li>
                       <li>{contentBasedOnLang.textList[4]}</li>
                   </ul>
                   <ul className='sidebar_second_list'>
                       {contentBasedOnLang.sidebarListTwo.map(item=><li>{item}</li>)}
                   </ul>
                   <ul className="sidebar_social_icons">
                      <li>
                          <img src={instagram} alt="" />
                      </li>
                      <li>
                          <img src={whatsapp} alt="" />
                      </li> 
                   </ul>
              </div>
        </div>
    )
}

export default SideBar
