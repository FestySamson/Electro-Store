import React from 'react'

import RatingStars from './Rating';
import './latest.css'

function Latest(props) {
  return (
    <div>
      
      <div className='late-product'>
          <div className="pro">
              <div className="off">{props.percentage}</div>
              <div className="pro-img">
              <img src={props.productImg} alt="" />
              </div>
              <RatingStars/>
              <p className='name'>{props.proName}</p>
              <p className='price'><span>{props.sale}</span><del>{props.regular}</del></p>
              
          </div>
      </div>
    </div>
  )
}
export default Latest