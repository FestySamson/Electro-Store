
import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css'

export default function Nav() {
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
       <nav>
           <div className="logo">
               <img src="/Images/logo.png" alt="Logo"/>
           </div>

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
    </div>

  )
}
