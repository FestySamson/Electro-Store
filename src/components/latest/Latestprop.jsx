import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import Latest from './Latest';
import './latest.css'

function Latestprop() {
  return (
    <div className='latest'>
      <div className="latt">
          <h2>Latest Products</h2>
          <div>
              <NavLink to='/' className='all'>
                View all products
                <FontAwesomeIcon icon={faArrowRight} className='i' />
              </NavLink>
          </div>
      </div>

      <div className='my-products'>
         <div>
            <NavLink  to='/'>
               <Latest
                    productImg= 'Images/s23.png'
                    proName= "Samsung Galaxy S23 Ultra"
                    sale=  '$1500'
                    regular= '$1700'
                    percentage='20% off'
               />
            </NavLink>
        </div>

        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/iphone13promax.png'
                    proName= "Iphone 13pro Max "
                    sale= '$1700'
                    regular= '$1900'
                    percentage='20% off'
               />
            </NavLink>
        </div>

        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/14pro.png'
                    proName= "Iphone 14 Pro Max "
                    sale= '$2000'
                    regular= '$2300'
                    percentage='20% off'
               />
            </NavLink>
        </div>
        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/iphone11pro.png'
                    proName= "Iphone 11 Pro Max "
                    sale= '$900'
                    regular= '$1000'
                    percentage='20% off'
               />
            </NavLink>
        </div>
        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/dellXp.png'
                    proName= "Dell XPS 17 (9700) "
                    sale= '$2500'
                    regular= '$30000'
                    percentage='25% off'
               />
            </NavLink>
        </div>
        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/series 8 red.png'
                    proName= "Galaxy Series 8 watch"
                    sale= '$900'
                    regular= '$1000'
                    percentage='20% off'
               />
            </NavLink>
        </div>
        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/Sonyheadphone.png'
                    proName= "Sony Headphone"
                    sale= '$200'
                    regular= '$250'
                    percentage='20% off'
               />
            </NavLink>
        </div>
        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/Alienware x15 R2 Gaming Laptop _ Dell USA.png'
                    proName= "Alienware x15 R2 Gaming Laptop _ Dell USA"
                    sale= '$3000'
                    regular= '$3500'
                    percentage='20% off'
               />
            </NavLink>
        </div>
        <div>
            <NavLink to='/'>
               <Latest
                    productImg= 'Images/Alienware x15 R2 Gaming Laptop _ Dell USA.png'
                    proName= "Alienware x15 R2 Gaming Laptop _ Dell USA"
                    sale= '$3000'
                    regular= '$3500'
                    percentage='20% off'
               />
            </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Latestprop
