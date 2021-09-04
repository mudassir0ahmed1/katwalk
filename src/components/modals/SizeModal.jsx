import React from 'react'
import  closeIcon from '../../assets/imgs/close.svg' 
import img from '../../assets/images/slider/slider4.jpg'
import styles from './styles.css'

const SizeModal = () => {
    const closeModal =()=>{
        document.getElementById('size_modal_container').classList.remove('active')
    }
    return (
        <div id='size_modal_container' className="modal_container">
            <div className='size_modal'>
                <div className="size_modal_header">
                    <h4>Size Guide Modal</h4>
                    <img onClick={closeModal} src={closeIcon} alt="" />
                </div>
                <div className="size_modal_body">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SizeModal
