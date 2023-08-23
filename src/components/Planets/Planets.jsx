/* eslint-disable no-unused-vars */
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import mars from '../../assets/img/planets/mars.png';
import saturno from '../../assets/img/planets/saturno.webp';
import jupiter from '../../assets/img/planets/jupiter.png';

const Planets = () => {
  return (
    <section className="planets-section">

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={mars} width='400px' /></SwiperSlide>
        <SwiperSlide><img src={saturno} width='400px' /></SwiperSlide>
        <SwiperSlide><img src={jupiter} width='400px' /></SwiperSlide>
        
        
      </Swiper> */}

      <h1 className="title">Planetas do Sistema Solar</h1>

    </section>
  );
};

export default Planets;
