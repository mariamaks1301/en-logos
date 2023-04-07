import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuList = () => {
    return (
        <div className='menu'>
            <div className="container">
                <nav className="menu__list">
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Cold snacks</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Hot appetizers</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Meat dishes</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Soups</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Fish dishes </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Grill menu </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Branded</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink className="menu__link" to="">Drinks</NavLink>
                    </li>
                </nav>
                

            </div>
        </div>
    );
};

export default MenuList;