
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { useNavigate, useParams } from 'react-router-dom';
import {HiOutlineChevronLeft} from 'react-icons/hi';
import FilterDrinks from '../../Components/FilterDrinks/FilterDrinks';

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios(`/products/${id}`)
        .then(({data})=> setProduct(data))
        .catch((err)=> console.log('Не удалось получить продукт', err.message))
    }, [])

    if(JSON.stringify(product) === '{}'){
        return (
            <div onClick={()=> navigate(-1)} className="container" >
                <div  className="product__back" >
                    <span className='product__back-icon'>
                        <HiOutlineChevronLeft style={{color: '#fff'}}/>
                    </span>
                    <span className='product__back-text'>Go back</span>
                </div>
                <h2 className='product__title'>The dish not found!</h2>
            </div>
        )
    }

    return (
        <div className='product'>
            <div className="container">
                 <div onClick={()=> navigate(-1)} className="product__back" >
                    <span className='product__back-icon'>
                        <HiOutlineChevronLeft style={{color: '#fff'}}/>
                    </span>
                    <span className='product__back-text'>Go back</span>
                </div>
                <div className="product__row">
                    <div className='product__block'>
                        <img className='product__img' src={`${product.image[0] === '.' ? '../' : ''}${product.image}`} alt={product.title} />
                    </div>
                    <div className='product__info'>
                        <h2 className='product__title'>{product.title}</h2>
                        <p className="product__description">{product.description}</p>
                        <p className="product__weight">
                            <span>Вес: </span>
                            <span>{product.weight}</span>
                            </p>
                        <div className="product__row product__row-basket">
                            <button className="product__btn btn">
                                <span>Cart</span>
                                <span className='product__btn-icon'>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.1244 18.5268L16.7047 5.30012C16.681 5.08717 16.4917 4.92154 16.2788 4.92154H13.6524V4.11706C13.6524 1.84558 11.8068 0 9.53532 0C7.26384 0 5.41826 1.84558 5.41826 4.11706V4.92154H2.72087C2.50792 4.92154 2.31863 5.08717 2.29497 5.30012L0.875296 18.5268C0.851634 18.6451 0.898957 18.7634 0.969941 18.858C1.04092 18.9527 1.15923 19 1.27754 19H17.7221C17.8404 19 17.9587 18.9527 18.0297 18.858C18.1007 18.7634 18.148 18.6451 18.1244 18.5268ZM13.2265 7.31133C13.4394 7.31133 13.6051 7.47696 13.6051 7.68991C13.6051 7.90286 13.4394 8.06849 13.2265 8.06849C13.0135 8.06849 12.8479 7.90286 12.8479 7.68991C12.8479 7.47696 13.0135 7.31133 13.2265 7.31133ZM6.27007 4.11706C6.27007 2.3188 7.73706 0.851806 9.53532 0.851806C11.3336 0.851806 12.8006 2.3188 12.8006 4.11706V4.92154H6.27007V4.11706ZM5.84416 7.31133C6.05711 7.31133 6.22274 7.47696 6.22274 7.68991C6.22274 7.90286 6.05711 8.06849 5.84416 8.06849C5.63121 8.06849 5.46558 7.90286 5.46558 7.68991C5.46558 7.47696 5.63121 7.31133 5.84416 7.31133ZM1.77442 18.1245L3.09945 5.74969H5.41826V6.53051C4.94503 6.69614 4.61378 7.1457 4.61378 7.66625C4.61378 8.32877 5.15799 8.87298 5.8205 8.87298C6.48302 8.87298 7.02723 8.32877 7.02723 7.66625C7.02723 7.1457 6.69597 6.69614 6.22274 6.53051V5.74969H12.7533V6.53051C12.28 6.69614 11.9488 7.1457 11.9488 7.66625C11.9488 8.32877 12.493 8.87298 13.1555 8.87298C13.818 8.87298 14.3622 8.32877 14.3622 7.66625C14.3622 7.1457 14.031 6.69614 13.5577 6.53051V5.74969H15.9712L17.2962 18.1245H1.77442Z" fill="white"/>
                                    </svg>

                                </span>
                            </button>
                            <p className="product__price">{product.price} $</p>
                        </div>
                        <div className="product__row product__row-nutrition">
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Proteins</p>
                                <p className='product__nutrition-num'>{product.protein}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Fats</p>
                                <p className='product__nutrition-num'>{product.fats}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Carb.</p>
                                <p className='product__nutrition-num'>{product.carbohydrates}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Ccal</p>
                                <p className='product__nutrition-num'>{product.calories}</p>
                            </div>
                            <div className='product__nutrition'>
                                <p className='product__nutrition-desc'>Ккал</p>
                                <p className='product__nutrition-num'>{product.weight}</p>
                            </div>
                        </div>
                        <div className='product__nutrition-mobile'>
                            <div>
                                Ccal: {product.calories}/{product.protein}/{product.fats}/{product.carbohydrates}
                            </div>
                        </div>

                    </div>
                </div>

            </div> 
            <FilterDrinks/>
        </div>
    );
};

export default Product;