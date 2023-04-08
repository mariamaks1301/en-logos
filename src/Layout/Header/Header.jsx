import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaRegUser} from 'react-icons/fa';
import { CustomContext } from '../../utils/Context';


const Header = () => {
    
    const {user, setUser} = useContext(CustomContext);
    const navigate = useNavigate();


    const logOutUser = ()=>{
        setUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/login')
    }
    


    return (
        <section className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className="header__left">
                        <h1 onClick={()=> navigate('/')} className='header__logo'>LOGOS</h1>
                        <div className='header__search'>
                            <span className='header__search-icon header__search-icon-location'>
                            <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.23914 9.39129C1.25354 5.15071 4.7029 1.72471 8.94348 1.73912C13.1841 1.75353 16.6101 5.20288 16.5957 9.44347V9.53042C16.5435 12.2869 15.0044 14.8348 13.1174 16.8261C12.0382 17.9467 10.8331 18.9388 9.52609 19.7826C9.1766 20.0849 8.6582 20.0849 8.3087 19.7826C6.3602 18.5143 4.65007 16.9131 3.25653 15.0522C2.01449 13.4294 1.3093 11.4597 1.23914 9.41738L1.23914 9.39129Z" stroke="#CFCFCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="8.91741" cy="9.53912" r="2.46087" stroke="#CFCFCF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                            </span>
                            <input className='header__search-field' type="text" placeholder='Enter shipping address' />
                            <span className='header__search-icon header__search-icon-search'>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9.76657" cy="9.7666" r="8.98856" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0183 16.4851L19.5423 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                            </span>
                        </div>
                        <div className='header__contact'>
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

                    {
                        user.email.length ? <span className='header__user' onClick={logOutUser}>
                            <FaRegUser fontSize='25px'/>
                            <span>Exit</span>
                        </span> :
                        <Link className='header__user' to='/register'>
                            <FaRegUser fontSize='25px'/>
                            <span>Sign in</span>
                        </Link>
                    }

                    <button className='header__btn btn'>
                        <span className='header__btn-text'>Cart</span>
                        <div className='header__btn-count'>
                                4
                        </div>
                    </button>
                </nav>


            </div>
        </section>
    );
};

export default Header;