import React from 'react'
import './trending.css'


function Trending(props) {
  return (
    <div>
        <div className="cateDiv">
         <div className="cateimg">
         <img src={props.ProductImg} alt="iphone"/>
         </div>
            <p id='na'>{props.categoryName}</p>
        </div>
    </div>
  )
}

export default Trending
