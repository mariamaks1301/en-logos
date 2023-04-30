import React, { useContext } from 'react';
import {BsCartCheck} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';


const Card = ({item}) => {

    const {basket, addBasket, plusItem, minusItem} = useContext(CustomContext);
    const navigate = useNavigate();

    return (
        <div  className="card">
            <div className="card__block-img">
                <img onClick={()=>navigate(`/product/${item.id}`)} className="card__img" src={item.image} alt={item.title} />
            </div>
            <div className="card__block-info">
                <div className="card__block-row">
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__weight">{item.weight} gr</p>
                </div>
                <p className="card__desc">{item.description}</p>

                {
                    basket.findIndex(product => product.id === item.id) > -1 
                        ?   <div className='card__buy card__block-row'>
                                <button onClick={()=> minusItem(item.id)} className='btn card__buy-btn'>
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="3.63636" width="3.27273" height="18" rx="1.63636" transform="rotate(-90 0 3.63636)" fill="white"/>
                                    </svg>
                                </button>
                                <p className="card__price">{item.price} 
                                <span>$</span>
                                </p>
                                <button onClick={() => plusItem(item.id)} className='btn card__buy-btn'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="7.36365" width="3.27273" height="18" rx="1.63636" fill="white"/>
                                        <rect y="10.6364" width="3.27273" height="18" rx="1.63636" transform="rotate(-90 0 10.6364)" fill="white"/>
                                    </svg>
                                </button>
                                <div className="card__circle">
                                    {basket.find(product => product.id === item.id).count}
                                </div>
                            </div>
                        :   <div className="card__block-row">
                                <p className="card__price">{item.price} $</p>
                                <button onClick={() => addBasket(item)} type='button' className="card__btn btn">
                                    Add to Cart
                                    <span className="card__btn-icon">
                                        <BsCartCheck/>
                                    </span>
                                </button>   
                            </div> 
                }


                
                
            </div>
            
        </div> 
    );
};

export default Card;