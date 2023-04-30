import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { CustomContext } from "../../utils/Context";
import Card from "../Card/Card";

const FilterDrinks = () => {
    const {products} = useContext(CustomContext);


    return (
        <div className='productFilter'>
            <div className="container">
                <h2 className='productFilter__title'>MEAT Dishes</h2>
            </div>

            <>
                <Swiper
                     slidesPerView={4.5}
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

                {
                    products.filter(el => el.category === 'drinks').map(item => (
                        <SwiperSlide key={item.id}>
                        <Card item={item}/>
                    </SwiperSlide> 
                    ))
                }
                               
                </Swiper>
            </>
  
        </div>
    );
};

export default FilterDrinks;