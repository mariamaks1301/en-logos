import React from 'react';
import {IoIosArrowUp} from 'react-icons/io';
import FooterList from './FooterList/FooterList';

const Footer = () => {
   
    return (
        <section className='footer'>
            <a href='#' className='footer__up'>
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
                        <FooterList/>
                    </nav>
                </div>
            </div>   
        </section>
    );
};

export default Footer;