/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Lottie from 'lottie-react'
import Youtube from "../assets/youtube.json"
import facebook from "../assets/facebook.json"
import { ChangeCursor2 } from '../cursor/hooks/ChangeCursor'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import "../styles/Landing.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const Landing = ({toggle, toggleShow}) => {
    // ChangeCursor();
    ChangeCursor2();

    
  
  return (
    <div className='Landing'>
      <Navbar toggle={toggle} toggleShow={toggleShow}/>

      <header className="header">
        <div className="header__mobile">
          <Swiper
            effect={'cube'}
            grabCursor={true}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          </Swiper>
        </div>
      </header>
      
      <div className="about-us">
        About us blah blah blah blah blah blah blah blah blah blah
      </div>

      <Footer />
    </div>
  )
}

export default Landing;