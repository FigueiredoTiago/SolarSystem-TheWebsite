import "./styles.scss";
import astronaut from "../../assets/img/Astronaut.svg";
import dog from "../../assets/img/dogNauta.svg";
import earth from "../../assets/img/earth.svg";
import Atropos from "atropos/react";
import arrow from '../../assets/img/icons/arrow.svg';


const Home = () => {
  return (
    <div className="bg-div">
      <section className="home-section container">
        <img src={earth} alt="" className="earth" />
        <img src={dog} className="dog" />

        <Atropos
          activeOffset={40}
          shadowScale={1.05}
          onEnter={() => console.log("Enter")}
          onLeave={() => console.log("Leave")}
          onRotate={(x, y) => console.log("Rotate", x, y)}
        >
          <div className="info-title">
            <h1 className="home-title">Wellcome To Solar System</h1>
            <h1 className="home-subtitle">
              Explorando os Mistérios do Sistema Solar
            </h1>

            <a href="#solar-system" className="button">
              Explore Now <img src={arrow} />
            </a>
          </div>
        </Atropos>

        <img src={astronaut} className="astronauta" />
      </section>
    </div>
  );
};

export default Home;
