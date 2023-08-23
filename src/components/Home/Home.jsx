import "./styles.scss";
import astronaut from '../../assets/img/astronaut.svg';
import dog from '../../assets/img/dogNauta.svg';
import earth from '../../assets/img/earth.svg';

const Home = () => {
  return (
    <section className="home-section">
      <section className="container home-container">

        <img src={earth} alt="" className="earth" />

        <img src={dog} className="dog" />

        <h1 className="home-title">Wellcome To Solar System</h1>
        <h1 className="home-subtitle">Descubra os Segredos do Universo</h1>

        <button className="button">Explore Now</button>

        <img src={astronaut} className="astronauta" />
      </section>
    </section>
  );
};

export default Home;
