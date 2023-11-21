import React from 'react';
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";

import "swiper/css";

import pic1 from '../../../images/popular-img/pic-1.jpg';
const swiperData = [
    {image: pic1},
	{image: pic1},
	{image: pic1},
	{image: pic1},
	{image: pic1},
	{image: pic1},
];

const HeaderSlider = () =>{
    return(
        <>
            <Swiper className="swiper-container mySwiper-4"						
				speed= {1500}
				slidesPerView= {4}
				spaceBetween= {20}
				
				autoplay= {{
				   delay: 2000,
				}}
				modules={[ Autoplay ]}
				breakpoints = {{
					600: {
						slidesPerView: 2,
						spaceBetween: 10,
					  },
					  768: {
						slidesPerView: 3,
						spaceBetween: 10,
					  },
					  1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					  },
					  1200: {
						slidesPerView: 4,
						spaceBetween: 20,
					  },
					  1600: {
						slidesPerView: 4,
						spaceBetween: 20,
					  },
					  1920: {
						slidesPerView: 4,
						spaceBetween: 20,
					  },
				}}
			>	
				{swiperData.map((d,i)=>(
					<SwiperSlide key={i}>
                        <div className="card mb-0">
                            <div className="card-body pb-2 pt-3">
                                <div className="text-center pop-cousin">
                                    <img src={d.image} alt="" />
                                    <Link to={"#"}><h6>Fish Burger</h6></Link>
                                </div>
                            </div>
                        </div>
					</SwiperSlide>
				))}				
			</Swiper>
        </>
    )
}
export default HeaderSlider;