/* eslint-disable no-unused-vars */
import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
        "Mercúrio, o planeta mais próximo do Sol, é um mundo rochoso e desolado com um diâmetro de cerca de 4.880 km. Sua proximidade solar resulta em temperaturas extremas, variando de -173°C a 427°C. Possui uma órbita elíptica e um período de rotação excepcionalmente longo de cerca de 59 dias terrestres, enquanto seu dia solar dura apenas 176 dias. Sua superfície apresenta uma variedade de características, incluindo vastas planícies, crateras de impacto e escarpas íngremes chamadas de falhas. A sonda MESSENGER, lançada em 2004, foi a primeira a orbitar Mercúrio e revelou vulcões extintos e evidências de água gelada em suas regiões sombreadas. A ausência de atmosfera significativa permite que a superfície de Mercúrio seja bombardeada diretamente pelo vento solar, resultando em uma tênue exosfera. Sua baixa gravidade torna difícil reter gases, resultando em uma atmosfera praticamente inexistente, composta principalmente de átomos dispersos.",
      img: mercurio,
    },
    {
      name: "Venus",
      description:
        "Vênus é o segundo planeta mais próximo do Sol e é muitas vezes chamado de irmão gêmeo da Terra devido ao seu tamanho e composição similares. Sua atmosfera densa é composta principalmente de dióxido de carbono, causando um intenso efeito estufa que o torna o planeta mais quente do sistema solar, com temperaturas superiores a 450°C.Sua rotação é extremamente lenta e peculiar, ocorrendo na direção oposta à maioria dos planetas, resultando em um dia solar mais longo que seu ano - um dia em Vênus dura cerca de 243 dias terrestres e seu ano dura aproximadamente 225 dias terrestres.A superfície venusiana é marcada por vastas planícies vulcânicas, altas montanhas e muitos impactos de crateras. A pressão atmosférica na superfície é esmagadora e é cerca de 92 vezes a da Terra.",
      img: venus,
    },
    {
      name: "Terra",
      description:
        "A Terra é o terceiro planeta a partir do Sol e é o único conhecido por abrigar vida. Com um diâmetro de cerca de 12.742 km, possui uma diversidade única de ecossistemas e uma atmosfera rica em oxigênio e nitrogênio, essenciais para a vida como a conhecemos.Sua rotação leva aproximadamente 24 horas, resultando em um dia e uma noite, enquanto sua órbita ao redor do Sol leva cerca de 365 dias, definindo nosso ano. A presença de água líquida em sua superfície é um fator crucial para a vida, e os oceanos cobrem cerca de 71% do planeta.A Terra apresenta uma diversidade de climas, desde as regiões polares até as regiões tropicais. Seu campo magnético protege a vida da radiação solar e cósmica. A exploração espacial permitiu o estudo detalhado de suas características, incluindo montanhas, oceanos, desertos e ecossistemas variados.",
      img: terra,
    },
    {
      name: "Marte",
      description:
        "Marte, o quarto planeta a partir do Sol, é muitas vezes chamado de Planeta Vermelho devido à cor de sua superfície. Possui um diâmetro de aproximadamente 6.779 km e é conhecido por suas características geológicas distintas, como vulcões, cânions e a maior montanha do sistema solar, o Monte Olimpo.Sua atmosfera fina é composta principalmente de dióxido de carbono, e a pressão na superfície é apenas uma fração da pressão na Terra. Marte tem estações como a Terra, mas sua órbita elíptica resulta em variações extremas de temperatura. Várias sondas e rovers, como o Curiosity e o Perseverance da NASA, exploraram a superfície marciana, encontrando evidências de água líquida no passado e sugerindo a possibilidade de habitabilidade. A busca por sinais de vida passada ou presente é um dos principais objetivos da exploração de Marte.",
      img: mars,
    },

    {
      name: "Jupiter",
      description:
        "Júpiter, o maior planeta do sistema solar, é um gigante gasoso com um diâmetro de aproximadamente 139.822 km. Sua massa é maior do que a de todos os outros planetas combinados. Possui um sistema de anéis e pelo menos 79 luas conhecidas, incluindo as quatro grandes luas galileanas: Io, Europa, Ganimedes e Calisto.Sua atmosfera é composta principalmente de hidrogênio e hélio, e suas características mais proeminentes incluem as faixas de nuvens coloridas e a Grande Mancha Vermelha, uma gigantesca tempestade que existe há séculos. A atmosfera turbulenta de Júpiter também é marcada por relâmpagos intensos.Júpiter possui um campo magnético extremamente poderoso, e sua influência gravitacional é vital para a estabilidade do sistema solar, protegendo os planetas internos de muitos objetos do cinturão de asteroides. A sonda Juno da NASA tem estudado Júpiter desde 2016, fornecendo informações detalhadas sobre sua estrutura interna e atmosfera.",
      img: jupiter,
    },
    {
      name: "Saturno",
      description:
        "Saturno, conhecido por seus impressionantes anéis, é o sexto planeta a partir do Sol. Seu diâmetro é de cerca de 116.464 km. Os anéis são compostos principalmente de partículas de gelo e rocha e são divididos em várias faixas distintas.Saturno é um gigante gasoso, predominantemente composto de hidrogênio e hélio. Ele tem mais de 80 luas conhecidas, sendo a maior delas, Titã, com uma atmosfera densa e rica em nitrogênio.A sonda Cassini-Huygens, uma missão conjunta da NASA e da ESA, explorou Saturno e suas luas, fornecendo detalhes sobre sua atmosfera, anéis e luas, incluindo descobertas sobre a possibilidade de água líquida em Encélado e lagos de hidrocarbonetos líquidos em Titã.A característica mais icônica de Saturno, seus deslumbrantes anéis, são compostos de inúmeras partículas de gelo e rocha em órbita ao seu redor. Eles variam em espessura e brilho e são visíveis da Terra com um telescópio amador.",
      img: saturno,
    },
    {
      name: "Urano",
      description:
        "Urano, o sétimo planeta a partir do Sol, é um gigante gelado com um diâmetro de cerca de 50.724 km. Sua inclinação axial extrema resulta em um movimento de rotação deitado, com seus polos apontando quase diretamente para o Sol. Urano é composto principalmente de hidrogênio, hélio e metano, o que confere sua coloração azul-esverdeada característica. Ele possui um sistema de anéis, embora menos impressionante do que os de Saturno, e 27 luas conhecidas, incluindo Miranda, com suas características superficiais únicas.A sonda Voyager 2 foi a única a visitar Urano, em 1986, fornecendo informações limitadas sobre o planeta e suas luas. Sua atmosfera turbulenta apresenta ventos fortes e atividade climática. Sua peculiar orientação magnética também é única entre os planetas.",
      img: urano,
    },

    {
      name: "Netuno",
      description:
        "Netuno, o oitavo planeta a partir do Sol, é um gigante gasoso com um diâmetro de cerca de 49.244 km. É conhecido por sua coloração azul intensa devido à presença de metano em sua atmosfera. Com ventos extremamente rápidos, Netuno abriga o sistema de tempestades mais forte do sistema solar, incluindo a Grande Mancha Escura. Seu clima é caracterizado por nuvens de gelo e atividade climática intensa. Netuno tem 14 luas conhecidas, incluindo Tritão, um objeto intrigante com uma órbita retrógrada e atividade geológica. A sonda Voyager 2 foi a única a visitar Netuno, em 1989, fornecendo informações valiosas sobre sua atmosfera, anéis e luas. Seu interior é composto principalmente de água, amônia e rocha, e sua atmosfera contém uma mistura de gases, incluindo hidrogênio, hélio e metano. Netuno também possui anéis, embora sejam difíceis de ver a partir da Terra.",
      img: netuno,
    },
  ];

  return (
    <section className="planets-section container">
      <h1 className="title grid-12">Planetas do Sistema Solar</h1>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
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
