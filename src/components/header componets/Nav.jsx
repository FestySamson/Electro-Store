
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import './nav.css'

export default function Nav() {

    const [isClick, setClick]=useState(true)


    const ShowNav =()=>{
        
        setClick(false);
    }
    const hideNav =()=>{
        setClick(true)
    }

  return (
    <div>
      <div  className='secondary'>
          <div className="storeNumber">
              <p>+2348108094806</p>
              <p>Store Location</p>
          </div>
          <div className="tell">
              tell a friend about Electro and get 25% off
          </div>
          <div className="log">
              <a href="#">Login</a> / <a href="#">Sign Up</a> 
          </div>
       </div>
       <div className="nav">
            
                <div className="logo">
                    <img src="/Images/logo.png" alt="Logo"/>
                </div>

               <div className={isClick ? 'show' : 'menu ' } onClick={()=>setClick(true)}>
                    <nav>
                            <ul>
                                <li>
                                        <NavLink exact to='/' className='links'>
                                                Home
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink exact to='/' className='links'>
                                        Shop Now     
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink exact to='/' className='links'>
                                            Contact Us
                                        </NavLink>
                                </li>
                                <li>
                                        <NavLink exact to='/' className='links'>
                                                Blog
                                        </NavLink>
                                </li>
                            </ul>
                    </nav>

                        <div className="add">
                            <div><FontAwesomeIcon icon={faSearch} /></div>
                            <div><FontAwesomeIcon icon={faHeart} /></div>
                            <div><FontAwesomeIcon icon={faShoppingCart} /> <span>0</span></div>
                        </div>

                        <div className='close'>
                            {!isClick && 
                            <button onClick={hideNav}>X</button>}
                        </div>
               </div>

            

            <div className="toggle">
                {isClick && 
                <button onClick={ShowNav}>&#9776;</button>}
            </div>
       </div>
      
    </div>

  )
}
