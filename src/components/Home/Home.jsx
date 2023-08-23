import "./styles.scss";
import astronaut from '../../assets/img/astronaut.svg';
import dog from '../../assets/img/dogNauta.svg';
import earth from '../../assets/img/earth.svg';  

const Home = () => {
  return (
    <section className="home-section container">
      
        <img src={earth} alt="" className="earth" />

        <img src={dog} className="dog" />

        <div className="info-title" >

          <h1 className="home-title">Wellcome To Solar System</h1>
          <h1 className="home-subtitle">Descubra os Segredos do Universo</h1>
          <button className="button">Explore Now</button>
          
        </div>

        <img src={astronaut} className="astronauta" />
    
    </section>
  );
};

export default Home;
