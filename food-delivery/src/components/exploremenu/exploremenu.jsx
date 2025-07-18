import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const exploremenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from the diverse menu!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploremenu-list-item'>
                        <img className={category===item.menu_name?'active':""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      <hr />
    </div>
  )
}

export default exploremenu
