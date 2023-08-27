import Curiosities from "./components/Curiosities/Curiosities";
import Home from "./components/Home/Home";
import Planets from "./components/Planets/Planets";
import Satelite from "./components/Satelites/Satelite";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Home />
      <SolarSystem  />
      <Planets />
      <Curiosities />
      <Satelite   />
    </>
  );
}

export default App;
