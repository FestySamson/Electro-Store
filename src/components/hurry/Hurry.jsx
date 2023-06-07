import React from 'react'
import './hurry.css'
import Counter from './Counter'

function Hurry() {
  return (
    <div className='hurry'>
      <div className="hurryImg">
          <img src="/Images/12pro.png" alt="" className='img1' />
          <img src="/Images/13pro.png" alt=""  className='img2' />
      </div>
      <div className="hurrytext">
          <div className="hurrylink">
              <a href="#">Hurry!</a>
          </div>
          <p className='up'>Up to 25% Discount <br />Check it Out</p>
          <Counter/>
          <div className="now">
              <a href="#">Shop Now!</a>
          </div>
      </div>
    </div>
  )
}

export default Hurry

