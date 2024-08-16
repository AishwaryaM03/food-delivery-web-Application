import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'> Dive into our mouthwatering menu and discover a variety of dishes crafted to
                satisfy every craving. From classic favorites to exciting new flavors, our selection offers something for everyone. Whether you're in the mood for a hearty meal, a light snack, or a sweet treat, you'll find it all here.
                Explore our menu and get ready to indulge in the perfect dish that suits your taste. Happy browsing!
            </p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt=""></img>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreMenu
