/* eslint-disable no-unused-vars */
import "./styles.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import BoxSlide from "../BoxSlide/BoxSlide";

const Planets = () => {

  return (
    <section className="planets-section container">
      <h1 className="title">Planetas do Sistema Solar</h1>

      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BoxSlide />
        </SwiperSlide>
        <SwiperSlide>
          <BoxSlide />
        </SwiperSlide>
        <SwiperSlide>
          <BoxSlide />
        </SwiperSlide>
        <SwiperSlide>
          <BoxSlide />
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
};

export default Planets;
