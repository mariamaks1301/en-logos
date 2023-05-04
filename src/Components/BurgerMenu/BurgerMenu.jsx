import React, {useContext} from 'react';
import FooterList from '../../Layout/Footer/FooterList/FooterList';
import { CustomContext } from '../../utils/Context';
import { menuData } from '../../utils/menuData';
import { NavLink, useNavigate } from 'react-router-dom';

const BurgerMenu = () => {
    const {burger, setBurger} = useContext(CustomContext);
   const navigate = useNavigate();

    return (
        <div className='burger' style={{display:  burger ? 'block' : 'none'}}>
            <span className='burger__close' onClick={()=> setBurger(false)}>
                <svg onClick={()=> setBurger(false)} width="25" height="25" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_72_4740)">
                <path d="M8.83637 7.21667L7.34687 5.72717L8.83637 4.23766C9.20232 3.87172 9.19451 3.26482 8.82843 2.89874C8.46235 2.53266 7.85545 2.52485 7.4895 2.89079L6 4.3803L4.5105 2.89079C4.14455 2.52485 3.53765 2.53266 3.17157 2.89874C2.80549 3.26482 2.79768 3.87172 3.16363 4.23766L4.65313 5.72717L3.16363 7.21667C2.79768 7.58261 2.80549 8.18951 3.17157 8.55559C3.53765 8.92167 4.14455 8.92948 4.5105 8.56354L6 7.07404L7.4895 8.56354C7.85545 8.92948 8.46235 8.92167 8.82843 8.55559C9.19451 8.18951 9.20232 7.58261 8.83637 7.21667Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_72_4740">
                <rect width="8" height="8" fill="white" transform="translate(6 0.0703125) rotate(45)"/>
                </clipPath>
                </defs>
                </svg>

            </span>
            <div className="container">
                <div className="burger__content">

                <nav className="burger__menu-list">
                    {
                        menuData.map((item) => (
                            <li key={item.category}  className='menu__item' 
                            onClick={()=> {
                                navigate(`/catalog/${item.category}`)
                                setBurger(false)
                                }}>
                                <NavLink className="menu__link" to="">{item.name}</NavLink>
                            </li>
                        ))

                    }
                </nav>
                    
                    <FooterList/>
                    <div className='burger__contact'>
                            <span className='header__contact-icon'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.99329 3.249C2.20417 2.89915 3.36678 1.62917 4.19526 1.66751C4.44311 1.68873 4.66222 1.83798 4.84024 2.01187H4.84092C5.249 2.4117 6.41982 3.92062 6.48555 4.23829C6.64782 5.01739 5.7187 5.46651 6.00284 6.25178C6.72725 8.02428 7.97544 9.27236 9.74879 9.99602C10.5334 10.2808 10.9826 9.35246 11.7618 9.51404C12.0795 9.58045 13.5892 10.7505 13.9884 11.1592V11.1592C14.1616 11.3365 14.3123 11.5563 14.3328 11.8041C14.3636 12.677 13.0148 13.8553 12.7518 14.0059C12.1315 14.4502 11.3222 14.442 10.3356 13.9833C7.58243 12.8379 3.1826 8.52132 2.01588 5.66437C1.56946 4.6833 1.53934 3.86859 1.99329 3.249Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.71027 1.83331C12.1783 2.10731 14.1269 4.05398 14.4043 6.52131" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9.71027 4.19531C10.8903 4.42531 11.8123 5.34731 12.0423 6.52731" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <div className='header__contact-info'>
                                <p className='header__contact-text'>Contacts:</p>
                                <a className='header__contact-phone' href="tel:+7 (917) 510-57-59">+7 (917) 510-57-59</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;