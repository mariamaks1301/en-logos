import React from 'react';
import { menuData } from '../../utils/menuData';
import {useForm} from 'react-hook-form';
import axios from '../../utils/axios';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {

    const {
        register, 
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm({
        mode: 'onBlur'
    })

    const handleAddProduct = (data, event)=>{
        event.preventDefault();
        const newProduct = {
            ...data,
            calories:  data.protein * 4 + data.fats * 9 + data.carbohydrates * 4,
        }
  

        axios.post(`/products`, newProduct)
            .then(()=>{})
            .catch((err)=> console.log('Не удалось добавить продукт', err.message))
            
            

    }


    

    return (
        <section className='addProduct'>
   
                <div className="content addProduct__content">
                    <form noValidate className='form' onClick={handleSubmit(handleAddProduct)}>
                        <h2 className='form__title'>Add New Product</h2>

                        

                        <label className='form__label' htmlFor="title">
                            <span className='form__label-title'>Product title</span>
                            <input {...register('title', {required: true })} id='title' className='form__field' type="text" placeholder='Product title' />
                        </label>
                        <label className='form__label'>
                            <span className='form__label-title'>Product image</span>
                            <input {...register('image', {required: true })}  className='form__field' type="text" placeholder='Product image' />
                        </label>
                        <label className='form__label' htmlFor="">
                            <span className='form__label-title'>Product description</span>
                            <input {...register('description', {required: true })} className='form__field' type="text" placeholder='Product description' />
                        </label>

                        

                        <div className="form__block">   
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Product price</span>
                                <input {...register('price', {required: true })} className='form__field' type="number" placeholder='Price' />
                            </label>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'>Product weight</span>
                                <input {...register('weight', {required: true })} className='form__field' type="number" placeholder='Weight' />
                            </label>   
                        </div>

                        <div className="form__block">
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'></span>
                                <input {...register('protein', {required: true })}  className='form__field' type="number" placeholder='Protein' />
                            </label>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'></span>
                                <input {...register('fats', {required: true })} className='form__field' type="number" placeholder='Fats' />
                            </label>
                            <label className='form__label' htmlFor="">
                                <span className='form__label-title'></span>
                                <input {...register('carbohydrates', {required: true })} className='form__field' type="number" placeholder='Carbohydrates' />
                            </label>
                        </div>

                     
                            <select {...register('category')} className='form__select'>
                                {/* <option disabled  value="">Choose category</option> */}
                                {
                                    menuData.map( item => (
                                        <option  className='form__option' key={item.category} value={item.category}>{item.name}</option>
                                    ))
                                }
                    
                            </select>
            


                        
                        <button type='submit' className='form__btn btn'>Add Product</button>
                    </form>
                </div>

        </section>
    );
};

export default AddProduct;