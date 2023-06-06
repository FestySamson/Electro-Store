import React from 'react'
import {NavLink} from 'react-router-dom';
import Latest from './latest';

function Latestprop() {
  return (
    <div>
         <div>
            <NavLink>
               <Latest
                    productImg='Images/s23.png'
                    proName="Samsung Galaxy S23 Ultra"
                    sale='$1500'
                    regular='$1700'
               />
            </NavLink>
        </div>
    </div>
  )
}

export default Latestprop
