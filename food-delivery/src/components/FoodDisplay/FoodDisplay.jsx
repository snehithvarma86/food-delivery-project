import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

import React, { useContext } from 'react'

const FoodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
              if(category==='All' || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
              }  
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
