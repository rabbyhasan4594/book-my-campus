import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Gallery = () => {
    return (
        <div className='lg:ms-20 p-2 lg:me-20'>
       <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='hover:scale-105 rounded-lg shadow-md shadow-orange-700' src="https://i.ibb.co/SJhGyWK/multinational-graduates-male-fem.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='hover:scale-105' src="https://i.ibb.co/4VKj4JY/graduation-concept-with-students-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='hover:scale-105' src="https://i.ibb.co/dp4BYvd/three-smiling-gradutes-friends-g.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='hover:scale-105' src="https://i.ibb.co/4VKj4JY/graduation-concept-with-students-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='hover:scale-105' src="https://i.ibb.co/3SSsTkC/portrait-group-students-celebrat.jpg" alt="" /></SwiperSlide>
        
       
        
      </Swiper>
     
        </div>
    );
};

export default Gallery;