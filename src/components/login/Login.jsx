import React, { useState } from 'react'
import './styles.css'
import chevron_down from '../../assets/imgs/down-chevron.svg'
import loginimg from '../../assets/loginimg.jpg'

const Login = () => {
    const [select,setSelect] = useState(968)
    const addActive =()=>{
        document.querySelector('.login_code_dropdown').classList.toggle('active')
    }
    const settingSelected =(number)=>{
            setSelect(number)
            document.querySelector('.login_code_dropdown').querySelectorAll('li').forEach(item=>item.classList.remove('code_selected'))
           document.getElementById('$'+number).classList.add('code_selected')
        }
    return (
        <div className='login_container'>
            <img src={loginimg} alt="" />
            <form >
                <h4>Welcome to katwalk</h4>
               <div>
                    <div className="logn_input_wrapper login_code_input">
                        <div>
                            <span onClick={addActive} className='login_code_dropdown_btn'>
                               {select} <img src={chevron_down} alt="" />
                            <ul className='login_code_dropdown'>
                                <li id='$970' onClick={()=> settingSelected(970)}>970</li>
                                <li id='$965' onClick={()=> settingSelected(965)}>965</li>
                                <li id='$968' onClick={()=> settingSelected(968)} className='code_selected'>968</li>
                                <li id='$973' onClick={()=> settingSelected(973)}>973</li>
                                <li id='$974' onClick={()=> settingSelected(974)}>974</li>
                                <li id='$971' onClick={()=> settingSelected(971)}>971</li>
                            </ul>
                            </span>
                        </div>
                    </div>
                    <div className="logn_input_wrapper login_number_input" >
                         <input type="text" placeholder='500000000' name='login_input' id='login_input'  />     
                    </div>

               </div>
                <button type='submit' data-text='Continue'></button>    
            </form>
        </div>
    )
}

export default Login
