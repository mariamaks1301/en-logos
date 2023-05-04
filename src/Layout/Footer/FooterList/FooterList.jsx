import React from 'react';
import { Link } from 'react-router-dom';

const FooterList = () => {
    return (
        <ul className='footer__list'>
            <li className='footer__item'>
                <Link className='footer__link'>About Restaurant</Link>
            </li>
            <li className='footer__item'>
                <Link to='/delivery' className='footer__link'>Conditions for the delivery</Link>
            </li>
            <li className='footer__item'>
                <Link to='/sales' className='footer__link'>Sales</Link>
            </li>
            
        </ul>
    );
};

export default FooterList;