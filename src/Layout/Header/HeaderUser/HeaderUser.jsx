import React from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../../utils/Context';
import {FaRegUser} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const HeaderUser = () => {

    const navigate = useNavigate();
    const {user, setUser} = useContext(CustomContext);

    const logOutUser = ()=>{
        setUser({
            email: ''
        })
        localStorage.removeItem('user')
        navigate('/login')
    }
    
    return (
        <>
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
        </>
    );
};

export default HeaderUser;