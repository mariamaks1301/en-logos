import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import Card from '../../Components/Card/Card';
import { menuData } from '../../utils/menuData';
import { CustomContext } from '../../utils/Context';
import CategorySelect from './CategorySelect/CategorySelect';
import OrderSelect from './OrderSelect/OrderSelect';
import TitleSearch from './TitleSearch/TitleSearch';


const Catalog = () => {


    const [products, setProducts] = useState([]);
    const {category} = useParams();
    const [order, setOrder] = useState('default');
    const [title, setTitle] = useState('');
 


    useEffect(()=> {


        const categories = `${category !== 'all' ? 'category=' + category + '&' : ''}`;
        const titleFilter = `${title.length !== 0 ? 'title_like=' + title : ''}`;

        const selectOrder = () => {
            switch (order) {
                case 'asc': {
                    return '_sort=price&_order=asc&'
                }
                case 'desc' : {
                    return '_sort=price&_order=desc&'
                }
                case 'abc' : {
                    return '_sort=title&_order=asc&'
                }
                case 'weight' : {
                    return '_sort=weight&_order=asc&'
                }
                case 'ccal' : {
                    return '_sort=calories&_order=asc&'
                }
                case 'default': {
                    return ''
                }      
            }
        }

        const orders = selectOrder()

        axios(`/products?${categories}${orders}${titleFilter}`)
            .then(({data})=> setProducts(data))
            .catch((err)=> console.log('Данные не получены'))
    }, [category, order, title])


    return (
        <section className='catalog'>
            <div className="container">
                <div className="catalog__content">
                    <aside className='catalog__aside'>
                        
                        <CategorySelect/>
                        <OrderSelect order={order} setOrder={setOrder}/>
                        <TitleSearch title={title} setTitle={setTitle}/>

                    </aside>
                    <div className='catalog__right'>
                        <h2 className='catalog__title'>
                            <Link to="/">Main page</Link> /  
                            {
                                category !== 'all' ? menuData.find((item)=>item.category === category).name : 'All categories'
                            }
                         
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