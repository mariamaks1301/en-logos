import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {BsEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import { CustomContext } from '../../utils/Context';
import axios from '../../utils/axios';



const Login = () => {

    const [eye, setEye] = useState(false);
    const navigate = useNavigate();
    const {user, setUser} = useContext(CustomContext);


    const {
        register,
        handleSubmit,
      } = useForm({mode: 'onBlur'});


      const loginUser = (data)=>{
        axios.post('/login', {
                ...data 
            }).then((res)=>{
                setUser({
                    token: res.data.accessToken,
                    ...res.data.user
                })
                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))
                navigate('/');
            }).catch((err)=>console.log(err))

      }

    return (
        <div className='login'>
            <div className="content">
            <form noValidate className='form' onClick={handleSubmit(loginUser)}>

                <h2 className='form__title'>Entrance to the LOGOS</h2>

                <label htmlFor="" className='form__label'>
                    <input {...register('email')} className='form__field' type="email" placeholder='Enter email' />
                </label>
   
         
                <label className='form__label form__label-password'>    
                    <input {...register('password')} className='form__field' type={eye ? 'text' : 'password'} placeholder='Create password'/>
                        <span className='form__eye' onClick={()=> setEye(prev => !prev)}>
                    {
                        eye ? <span className='form__field-icon'><BsEyeFill/></span> 
                        : <span className='form__field-icon'><BsFillEyeSlashFill/></span>  
                    }   
                    </span>   
                </label>

                <button className='form__btn btn' type='submit'>Sign in</button>
                
                <p className='form__link'>
                  <Link className='form__link'  to='/register'>I haven't an account yet</Link>
                </p>
                    
            </form>
        </div>
           
        </div>
    );
};

export default Login;