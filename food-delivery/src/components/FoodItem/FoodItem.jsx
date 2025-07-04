import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
  
  const {cartItems,addToCart,removeFromCart} =useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-contaner">
        <img src={image} alt="" className="food-item-img" />
        {!cartItems[id]
          ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
          :<div className="food-item-counter">
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)}  src={assets.add_icon_green}   alt="" />
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-des">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>

    </div>
  )
}

export default FoodItem
