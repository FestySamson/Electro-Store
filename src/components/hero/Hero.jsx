import React from 'react'
import './hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div className="save">
          <p className='per'>Sale up to 30% off </p>
          <p className='apple'>Apple Watch Series</p>
          <p className='pack'>feature packed at a better value than powerful sensors <br /> to monitor your fitness</p>
         <div className='shop'>
            <a href="">Shop Now</a>
         </div>
      </div>
      <div className="watch">
          <img src="/Images/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
