import React from 'react'
import {NavLink} from 'react-router-dom';
import Trending from './trending';
import './trending.css'


function Trendingprop() {
  return (
      <div className="trend">

          <p> Trending categories</p>
          <div className='categories'>
            <div>
            <NavLink exact to=''>
                        <Trending
                            ProductImg='Images/iphone13.png'
                            categoryName= "iphone"
                        />
                    </NavLink>
                </div>

                <div>
                    <NavLink exact to=''>
                        <Trending
                            ProductImg='Images/ipad1.png'
                            categoryName= "Tablets"
                        />
                    </NavLink>
                </div>

                <div>
                <NavLink exact to=''>
                    <Trending
                        ProductImg='Images/jbl2.png'
                        categoryName= "Headphones"
                    />
                </NavLink>
                </div>

                <div>
                    <NavLink exact to=''>
                        <Trending
                            ProductImg='Images/Samsung_Galaxy_Watch_4.png'
                            categoryName= "Galaxy watch"
                        />
                    </NavLink>
                </div>

            <div>
                <NavLink exact to=''>
                        <Trending
                            ProductImg='Images/series b black.png'
                            categoryName= "Apple watch"
                        />
                    </NavLink>

            </div>

                <div>
                    <NavLink exact to=''>
                        <Trending
                            ProductImg='Images/pro2.png'
                            categoryName= "Airpods"
                        />
                    </NavLink>

                </div>
                
                <div>
                <NavLink exact to=''>
                    <Trending
                        ProductImg='Images/Alienware x14 Gaming Laptop.png'
                        categoryName= "Laptops"
                    />
                </NavLink>
                </div>

                <div>
                <NavLink exact to=''>
                    <Trending
                        ProductImg='Images/s23.png'
                        categoryName= "Andriods"
                    />
                </NavLink>
                </div>
                <div>
                <NavLink exact to=''>
                    <Trending
                        ProductImg='Images/xsmas black.png'
                        categoryName= "Accessories"
                    />
                </NavLink>
                </div>

                <div>
                <NavLink exact to=''>
                    <Trending
                        ProductImg='Images/gamepad2.png'
                        categoryName= "Game Pads"
                    />
                </NavLink>
                </div>
           </div>
           <div className="boxes">
               <div className="box1">
                   <p>Smart Security camera</p>
                   <h4>Just Starting at $80</h4>
                   <div className='shop2'>
                      <a href="">Shop Now</a>
                 </div>
                 <div className="cam">
                     <img src="/Images/camera.png" alt="" />
                 </div>
               </div>
               <div className="box1">
                   <p>Entertainment and Games</p>
                   <h4>Just Starting at $50 Hurry Up!</h4>
                   <div className='shop2'>
                      <a exact to=''>Shop Now</a>
                 </div>
                 <div className="cam">
                     <img src="/Images/gamepad.png" alt="" />
                 </div>
               </div>
           </div>
      </div>
  )
}

export default Trendingprop
