import "./styles.scss";
// import moon from '../../assets/img/moon.svg'

const Curiosities = () => {
  return (
    <section className="curiosities-section container">
      <section className="left grid-6">
        <h1 className="title"> Lua (Satélite natural da Terra) </h1>

        <p>
          - A Lua é o único satélite natural da Terra e o quinto maior do
          Sistema Solar. É o maior satélite natural de um planeta no sistema
          solar em relação ao tamanho do seu corpo primário, tendo 27% do
          diâmetro e 60% da densidade da Terra, o que representa 1⁄81 da sua
          massa. Entre os satélites cuja densidade é conhecida, a Lua é o
          segundo mais denso, atrás de Io. Estima-se que a formação da Lua tenha
          ocorrido há cerca de 4,51 mil milhões* de anos
        </p>

        <p>
          -A Lua exerce uma influência gravitacional sobre a Terra, causando as
          marés nos oceanos. Seu efeito também ajuda a estabilizar o eixo de
          rotação da Terra, resultando em um clima mais estável.
        </p>

        <p>
          - A superfície lunar é coberta por crateras de impacto, mares
          (planícies vulcânicas) e montanhas. A falta de atmosfera significativa
          significa que a Lua não tem proteção contra impactos de meteoroides,
          resultando em sua superfície craterada.
        </p>

        <p>
          - A Lua é o objeto mais brilhante do céu noturno depois do Sol e é o
          único corpo celeste fora da Terra que já foi visitado por humanos.
        </p>

        <p>
          -Diversas missões espaciais, incluindo a Apollo 11 da NASA, pousaram
          na Lua. Essas missões forneceram informações cruciais sobre sua
          formação, composição e história.
        </p>

        <p>
          -Após a missão Apollo 17, em 1972, a Lua foi visitada apenas por naves
          espaciais não tripuladas, como pela última sonda do programa soviético
          Lunokhod. Desde 2004, Japão, China, Índia, Estados Unidos e a Agência
          Espacial Europeia enviaram sondas espaciais ao satélite natural. Estas
          naves espaciais têm contribuído para confirmar a descoberta de água
          gelada em crateras lunares permanentemente escuras nos pólos e
          vinculada ao regolito lunar. Missões tripuladas futuras para a Lua
          foram planejadas, através de esforços de governos e do financiamento
          privado. A Lua permanece, conforme acordado no Tratado do Espaço
          Exterior, livre para todas as nações que queiram explorar o satélite
          para fins pacíficos.
        </p>

      </section>

      <section className="right grid-6">
        <img src="https://www.publicdomainpictures.net/pictures/390000/nahled/mond-himmel-transparent-png.png" />
      </section>
    </section>
  );
};

export default Curiosities;
