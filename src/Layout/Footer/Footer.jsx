import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='footer'>
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
                                <Link to={'/delivery'} className='footer__link'>Conditions for the delivery</Link>
                            </li>
                            <li className='footer__item'>
                                <Link to='/sales' className='footer__link'>Sales</Link>
                            </li>
                            <li className='footer__item'>
                                <Link className='footer__link'>Add Dish</Link>
                            </li>  
                        </ul>

                    </nav>
                </div>
            </div>   
        </section>
    );
};

export default Footer;