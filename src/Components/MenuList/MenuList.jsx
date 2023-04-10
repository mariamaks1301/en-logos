import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { menuData } from '../../utils/menuData';

const MenuList = () => {
    const navigate = useNavigate()
    return (
        <div className='menu'>
            <div className="container">

                <nav className="menu__list">
                    {
                        menuData.map((item) => (
                            <li key={item.category}  className='menu__item' onClick={()=> navigate(`/catalog/${item.category}`)}>
                                <NavLink className="menu__link" to="">{item.name}</NavLink>
                            </li>
                        ))

                    }
                </nav>
                

            </div>
        </div>
    );
};

export default MenuList;