import React from 'react';
import {BsCartCheck} from 'react-icons/bs';


const Card = ({item}) => {
    return (
        <div  className="card">
                            <div className="card__block-img">
                                <img className="card__img" src={item.image} alt={item.title} />
                            </div>
                            <div className="card__block-info">
                                <div className="card__block-row">
                                    <h3 className="card__title">{item.title}</h3>
                                    <p className="card__weight">{item.weight} gr</p>
                                </div>
                                <p className="card__desc">{item.description}</p>
                                <div className="card__block-row">
                                    <p className="card__price">{item.price}</p>
                                    <button className="card__btn btn">
                                        Add to Cart
                                        <span className="card__btn-icon">
                                            <BsCartCheck/>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div> 
    );
};

export default Card;