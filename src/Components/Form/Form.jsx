import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {FaPencilAlt} from 'react-icons/fa';
import {BsEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import axios from '../../utils/axios';
import { CustomContext } from '../../utils/Context';

const Form = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [eye, setEye] = useState(false);

    const {user, setUser} = useContext(CustomContext);


    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
      } = useForm({mode: 'onBlur'});

      const registerUser = (data) => {
        const {passwordAgain, ...other} = data

        axios.post(`/register`, {...other})
        .then(({data})=> {
            setUser({
                token: data.accessToken,
                ...data.user
            })
            localStorage.setItem('user', JSON.stringify({
                token: data.accessToken,
                ...data.user
            }))
            reset();
            navigate('/')
        })
        .catch((err)=> console.log(err.message))
  
      }



    

    return (
        <div className="content">
            <form noValidate className='form' onClick={handleSubmit(registerUser)}>

                
                <p className='form__email'>{email}<FaPencilAlt/></p>

                
                <h2 className='form__title'>Register</h2> 
                {/* <h2 className='form__title'>Sign in</h2> */}
                
                
               
                <label htmlFor="" className='form__label'>
                    <input {...register('email', {
                        required : {
                            message: "Email is required",
                            value: true,
                        },
                        minLength: {
                            message: "Min length 10 caracters",
                            value: 10,
                        },
                        pattern: {
                            message : "Write your email correctly example@mail.com",
                            value: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                        },
                    })} className='form__field' onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter email' />
                    <span className='form__error'>{errors.email && errors.email.message}</span>
                </label>
   
         
                <label className='form__label form__label-password'>    
                    <input {...register('password', {
                    required : {
                        message: "Password is required",
                        value: true,
                    },
                    minLength: {
                        message: "Min length 6 caracters",
                        value: 6,
                    },
                    pattern: {
                        message : "The password must contain at least 8 characters, a number and a capital letter!",
                        value:  /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z][0-9a-zA-Z!@#$%^&*]){8,}/g,
                    },
                    })} className='form__field' type={eye ? 'text' : 'password'} placeholder='Create password'/>
                        <span className='form__eye' onClick={()=> setEye(prev => !prev)}>
                    {
                        eye ? <span className='form__field-icon'><BsEyeFill/></span> 
                        : <span className='form__field-icon'><BsFillEyeSlashFill/></span>  
                    }   
                    </span>
                    <span className='form__error'>{errors.password && errors.password.message}</span>     
                </label>

                <label className='form__label-password'>
                    <input
                        {...register('passwordAgain', {
                            required: {
                                message: 'Repeat password',
                                value: true,
                            },
                            validate: v => {
                                if (getValues('password') !== v) {
                                    return 'Your passwords do no match'
                                }
                            },
                        })}
                    className='form__field' type={eye ? 'text' : 'password'} placeholder='Password Again'/>
                    <span className='form__eye' onClick={()=> setEye(prev => !prev)}>
                    {
                        eye ? <span className='form__field-icon'><BsEyeFill/></span> 
                        : <span className='form__field-icon'><BsFillEyeSlashFill/></span>  
                    }   
                    </span>
                </label>


                <button className='form__btn btn' type='submit'>Create an account</button>
                
                <p className='form__link'>
                  <Link className='form__link'  to='/login'>I already have an account</Link>
                  {/* <Link className='form__link'  to='/register'>I haven't an account yet</Link>  */}
                </p>
                    
            </form>
        </div>
    );
};

export default Form;