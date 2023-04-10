import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '../../utils/axios';
import Card from '../../Components/Card/Card';
import { menuData } from '../../utils/menuData';

const Catalog = () => {
    
    const [products, setProducts] = useState([]);
    const {category} = useParams();
 

    useEffect(()=> {
        axios(`/products?category=${category}`)
            .then(({data})=> setProducts(data))
            .catch((err)=> console.log('Данные не получены'))
    }, [])

    console.log(products);

    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <aside className='catalog__aside'>

                    </aside>
                    <div className='catalog__right'>
                        <h2 className='catalog__title'>
                            <Link to="/">Main page</Link> / {menuData.find((item)=>item.category === category).name}
                        </h2>
                        <div className="catalog__row">
                            {
                                products.map(item => (
                                    <Card key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Catalog;