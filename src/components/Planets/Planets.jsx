/* eslint-disable no-unused-vars */
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import BoxSlide from "../BoxSlide/BoxSlide";


import mars from '../../assets/img/planets/mars.png';
import jupiter from '../../assets/img/planets/jupiter.png';

const Planets = () => {

  const planets = [
    {
      name: "Marte",
      description:
        "Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.",
      img: mars,
    },

    {
      name: "Jupiter",
      description:
        "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[16] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida.",
      img: jupiter,
    },
  ];

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
        {planets.map((item) => (
          <SwiperSlide key={item.name}>
            <BoxSlide
              name={item.name}
              description={item.description}
              img={item.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Planets;
