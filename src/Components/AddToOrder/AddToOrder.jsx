import React from 'react';
import { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const AddToOrder = () => {

    const {products} = useContext(CustomContext);

    return (
        <div className='productFilter addToOrder'>
            <div className="container">
                <h2 className='productFilter__title addToOrder__title'>Add to order</h2>
            </div>

            <>
                <Swiper
                     slidesPerView={4}
                     spaceBetween={20}
                     freeMode={true}
                     loop={true}
                     autoplay={{
                         delay: 2000
                     }}
                     speed={2000}
                     modules={[Autoplay]}
                     className="mySwiper"
                >

                <div className="container">
                    <div className='addToOrder__block'>
                        {
                            products.filter(el => el.category === 'hot').map(item => (
                                <SwiperSlide key={item.id}>
                                <Card item={item}/>
                            </SwiperSlide>
                            ))
                        }
                    </div>
                </div>
                </Swiper>
            </>
  
        </div>
    );
};

export default AddToOrder;