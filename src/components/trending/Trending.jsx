import React from 'react'
import './trending.css'


function Trending(props) {
  return (
    <div>
        <div className="cateDiv">
          <img src={props.ProductImg} alt="iphone"/>
            <p id='na'>{props.categoryName}</p>
        </div>
    </div>
  )
}

export default Trending
