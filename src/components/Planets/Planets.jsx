/* eslint-disable no-unused-vars */
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import BoxSlide from "../BoxSlide/BoxSlide";

const Planets = () => {
  return (
    <section className="planets-section container">
      <h1 className="title">Planetas do Sistema Solar</h1>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><BoxSlide /></SwiperSlide>
        <SwiperSlide><BoxSlide /></SwiperSlide>
        <SwiperSlide><BoxSlide /></SwiperSlide>
        <SwiperSlide><BoxSlide /></SwiperSlide>
        <SwiperSlide><BoxSlide /></SwiperSlide>
        
        
      </Swiper>

    </section>
  );
};

export default Planets;
