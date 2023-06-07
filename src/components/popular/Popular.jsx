import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import './popular.css'
import RatingStars from '../latest/Rating';

export default function Popular() {

    const Products = [
        {
            id:1,
            name:'Alienware x14 Gaming Laptop',
            image:'/Images/Alienware x14 Gaming Laptop.png',
            sales:'$2000',
            regular:'$2500',
            category: 'Laptop'
        },
        {
            id:2,
            name:'iPhone 13 pro',
            image:'/Images/13pro.png',
            sales:'$1500',
            regular:'$1700',
            category: 'iPhones'
        },
        {
            id:3,
            name:'Iphone Xs max case',
            image:'/Images/xsmas black.png',
            sales:'$50',
            regular:'$100',
            category: 'Accessories'
        },
        {
            id:4,
            name:'JBL Headphone',
            image:'/Images/jbl1.png',
            sales:'$200',
            regular:'$250',
            category: 'Headphones'
        },
        {
            id:5,
            name:'Series 7 Blue color',
            image:'/Images/series7 blue.png',
            sales:'$120',
            regular:'$150',
            category: 'serieswatch'
        },
        {
            id:6,
            name:'Samsung Galaxy s23 Ultra',
            image:'/Images/s23.png',
            sales:'$120',
            regular:'$150',
            category: 'Andriods'
        },
        {
            id:7,
            name:'Ipad',
            image:'/Images/ipad1.png',
            sales:'$500',
            regular:'$570',
            category: 'ipads'
        }



    ]

    
        const [selectedCategory, setSelectedCategory] = useState('');
      
        const handleCategoryClick = (category) => {
          setSelectedCategory(category);
        };
        const handleShowAll = () => {
            setSelectedCategory('');
          };
        
        const filteredProducts = selectedCategory
          ? Products.filter((product) => product.category === selectedCategory)
          : Products;

  return (
    <div className='popular'>
       <div className="pp">
           <h3>Popular Products</h3>
           <div className="filters">
               <button onClick={() => handleCategoryClick('Laptop')}>Laptops</button>
               <button onClick={() => handleCategoryClick('Headphones')}>Headphones</button>
               <button onClick={() => handleCategoryClick('iPhones')}>iPhones</button>
               <button onClick={() => handleCategoryClick('Andriods')}>Andriods</button>
               <button onClick={() => handleCategoryClick('ipads')}>iPads</button>
               <button onClick={() => handleCategoryClick('serieswatch')}>Apple Watch</button>
               <button onClick={() => handleCategoryClick('Accessories')}>Accessories</button>
               <button onClick={handleShowAll}>All Products</button>
           </div>
       </div>

       <div className='my-products' id='popp'>
        {filteredProducts.map((product) => (
         <NavLink to={`/product/${product.id}`}>
             <div key={product.id}  className="pro">
                <div className="pro-img">
                <img src={product.image} alt={product.name} />
                </div>
                <RatingStars/>
                <div className='name'>{product.name}</div>
                <p className='price'><span>{product.sales}</span><del>{product.regular}</del></p>
          </div>
         </NavLink>
        ))}
      </div>
    </div>
  )
}

