import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {IoIosArrowUp} from 'react-icons/io';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <section className='footer'>
            <a href='#' className='footer__up' onClick={()=> navigate('/')}>
               <IoIosArrowUp fill='black' fontSize={'22px'}/>
            </a>
            <div className="container">
                <div className="footer__row">
                    <div className="footer__left">
                        <h2 className='footer__title'>LOGOS</h2>
                        <span className='footer__info'>
                            © ООО СК «АПШЕРОН»  <br />
                            Все права защищены. 2010-2020
                        </span>
                        <p className='footer__text'>Пользовательское соглашение</p>
                        <p className='footer__text'>Карта сайта</p>
                        <p className='footer__text'>Политика конфиденциальности</p>

                                       
                    </div>
                    <nav className='footer__nav'>
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

                    </nav>
                </div>
            </div>   
        </section>
    );
};

export default Footer;