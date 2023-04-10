import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import {BsChevronDown, BsChevronUp} from 'react-icons/bs';

const Delivery = () => {

    const [selected, setSelected] = useState(null);
    const [delivery, setDelivery] = useState([]);

    useEffect(()=>{
        axios('/delivery')
        .then(({data})=> setDelivery(data))
        .catch((err)=> console.log(err.message))
    }, [])

    const toggle = (idx) =>{
        if(selected === idx){
            return setSelected(null)
        }
        setSelected(idx)
    }


    return (
        <div className='delivery'>
            <div className="container">    
            <h2 className="delivery__title productFilter__title">delivery terms</h2>
                <div className="delivery__row">
                    <div className="delivery__left">
    
                        {
                            delivery.map((item, idx) => (
                                <div key={item.id} className="delivery__accordion">
                                    <div onClick={()=> toggle(idx)} className="delivery__accordion-title">{item.title}
                                    <span>
                                        {
                                            selected === idx ? <BsChevronDown/> : <BsChevronUp/>
                                        }
                                        
                                    </span>
                                    </div>
                                    <div className={selected === idx ? 'delivery__accordion-answer show' : 'delivery__accordion-answer '}>{item.answer}</div>
                                </div>
                            ))
                        }
                    </div>
    
                    <div className='delivery__right'>
                        <img className='delivery__right-img' src="" alt="" />
                    </div>
                </div>
                <div className="delivery__info">
                    <div className="delivery__info-row">
                        <div className="delivery__work-time">
                            <h3 className='delivery__info-title'>График работы доставки:</h3>
                            <p className='delivery__info-desc'>с 10:00-21:00</p>
                        </div>
                        <div className="delivery__caffee-time">
                            <h3 className='delivery__info-title'>График работы кафе:</h3>
                            <p className='delivery__info-desc'>с 8:00-21:00</p>
                        </div>
                    </div>
                    <h3 className='delivery__info-title'>Минимальный заказ:</h3>
                    <p className="delivery__info-desc">
                        Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
                        Доставка оператором такси от любой суммы заказа - по тарифам 
                        перевозчика.
                    </p>

                </div>
            </div>

            
        </div>
    );
};

export default Delivery;