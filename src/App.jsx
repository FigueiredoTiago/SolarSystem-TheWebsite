import Curiosities from "./components/Curiosities/Curiosities";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Planets from "./components/Planets/Planets";
import Satelite from "./components/Satelites/Satelite";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import SpacialStation from "./components/SpacialStation/SpacialStation";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Home />
      <SolarSystem  />
      <Planets />
      <Curiosities />
      <Satelite   />
      <SpacialStation />
      <Footer />
    </>
  );
}

export default App;
