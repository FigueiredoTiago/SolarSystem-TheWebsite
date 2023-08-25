/* eslint-disable no-unused-vars */
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

import { Navigation } from "swiper/modules";

import BoxSlide from "../BoxSlide/BoxSlide";

import mars from "../../assets/img/planets/marte.webp";
import jupiter from "../../assets/img/planets/jupiter.webp";
import venus from "../../assets/img/planets/venus.webp";
import mercurio from "../../assets/img/planets/mercurio.jpg";
import netuno from "../../assets/img/planets/netuno.webp";
import terra from "../../assets/img/planets/terra.jpg";
import saturno from "../../assets/img/planets/saturno.jpg";
import urano from "../../assets/img/planets/urano.webp";

const Planets = () => {
  const planets = [
    {
      name: "Mercurio",
      description:
        "Mercúrio é o primeiro planeta do sistema solar, a contar a partir da proximidade com o Sol, distando-se em apenas 57,9 milhões de quilômetros da estrela em média. Com um diâmetro de 4878 km, é o menor entre os planetas do nosso sistema solar e também o que realiza mais rapidamente o seu movimento de translação, executado a uma velocidade de aproximadamente 47,87 km/s, levando, assim, 88 dias para completar sua volta ao redor do sol.",
      img: mercurio,
    },
    {
      name: "Venus",
      description:
        "Vénus (português europeu) ou Vênus (português brasileiro) (AO 1990: Vénus ou Vênus) é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite. Depois da Lua, é o objeto mais brilhante do céu noturno, atingindo uma magnitude aparente de -4,6, o suficiente para produzir sombras. A distância média da Terra a Vênus é de 0,28 AU, sendo esta a menor distância entre qualquer par de planetas.",
      img: venus,
    },
    {
      name: "Terra",
      description:
        "A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta.",
      img: terra,
    },
    {
      name: "Marte",
      description:
        "Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho, porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.",
      img: mars,
    },

    {
      name: "Jupiter",
      description:
        "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno. Estes quatro planetas são por vezes chamados de planetas jupiterianos ou planetas jovianos, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida.",
      img: jupiter,
    },
    {
      name: "Saturno",
      description:
        "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
      img: saturno,
    },
    {
      name: "Urano",
      description:
        "Urano (Úrano em Portugal) é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano. Embora seja visível a olho nu em boas condições de visualização, não foi reconhecido pelos astrônomos antigos como um planeta devido a seu pequeno brilho e lenta órbita. William Herschel anunciou sua descoberta em 13 de março de 1781, expandindo as fronteiras do Sistema Solar pela primeira vez na história moderna. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio.",
      img: urano,
    },

    {
      name: "Netuno",
      description:
        "Netuno ou Neptuno (AO 1990: Netuno ) é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas.",
      img: netuno,
    },
  ];

  return (
    <section className="planets-section container">
      
      <h1 className="title grid-12">Planetas do Sistema Solar</h1>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
