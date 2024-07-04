import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const exploremenu = () => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from the diverse meu</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='exploremenu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default exploremenu
