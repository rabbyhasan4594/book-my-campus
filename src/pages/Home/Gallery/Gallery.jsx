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
        <div className='pt-8'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full '>
                    <div className='pb-8 text-white mt-8 text-center'>
                        <p className='text-4xl font-bold border-b-4 border-white p-2 inline'>Gallery</p>
                        <p className='py-6'></p>
                    </div>
                   
                </div>
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
        </div>
       
    );
};

export default Gallery;