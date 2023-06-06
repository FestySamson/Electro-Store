import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'
import RatingStars from './Rating';
import './latest.css'

export default function Latest(props) {
  return (
    <div className='latest'>
      <div className="latt">
          <h2>Latest Products</h2>
          <div>
              <NavLink className='all'>
                View all products
                <FontAwesomeIcon icon={faArrowRight} className='i' />
              </NavLink>
          </div>
      </div>
      <div className='late-product'>
          <div className="pro">
              <img src={props.productImg} alt="" />
              <RatingStars/>
              <p className='name'>{props.proName}</p>
              <p className='price'><span>{props.sale}</span><del>{props.regular}</del></p>
              <div className="cart">
                <button className='plus'>+</button>
                <button className='minus'>-</button>
              </div>
          </div>
      </div>
    </div>
  )
}
