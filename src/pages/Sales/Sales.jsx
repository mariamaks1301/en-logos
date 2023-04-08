import React, { useEffect, useState } from 'react';
import MenuList from '../../Components/MenuList/MenuList';
import Map from '../Home/Map/Map';
import axios from '../../utils/axios';

const Sales = () => {

    const [sales, setSales] = useState([]);

    useEffect(()=>{
        axios('/sales')
        .then(({data})=> setSales(data))
        .catch((err)=> console.log(err.message))
    }, []);

    return (
        <div className='sales'>
            <div className="container">

                <MenuList/>
                <h2 className='sales__title productFilter__title'>Sales</h2>

                <div className="sales__row">
                    {
                        sales.map(item => (
                            <div key={item.id} className="sales__card">
                                <img className='sales__card-img' src={item.image} alt={item} />
                                <div className="sales__card-info">
                                    <h3 className="sales__card-title">{item.title}</h3>
                                    <p className="sales__card-desc">{item.description}</p>
                                    <div className='sales__card-row'>
                                        <p className='sales__card-date'>{item.date}</p>
                                        <p className='sales__card-discount'>Discount: {item.discount} %</p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
            <Map/>  
        </div>
    );
};

export default Sales;