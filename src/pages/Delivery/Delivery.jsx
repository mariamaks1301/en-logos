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
                            <h3 className='delivery__info-title'>Delivery work schedule:</h3>
                            <p className='delivery__info-desc'>from 10a.m to 9p.m</p>
                        </div>
                        <div className="delivery__caffee-time">
                            <h3 className='delivery__info-title'>Cafe opening hours:</h3>
                            <p className='delivery__info-desc'>from 8a.m to 9p.m</p>
                        </div>
                    </div>
                    <h3 className='delivery__info-title'>Minimum order:</h3>
                    <p className="delivery__info-desc">
                        Free delivery by foot courier for orders over 35$
                        Delivery by a taxi operator from any amount of the order - according to tariffs
                        carrier.
                    </p>

                </div>
            </div>

            
        </div>
    );
};

export default Delivery;