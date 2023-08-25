import Curiosities from "./components/Curiosities/Curiosities";
import Home from "./components/Home/Home";
import Planets from "./components/Planets/Planets";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import "./sass/style.scss";

function App() {
  return (
    <>
      <Home />
      <SolarSystem  />
      <Planets />
      <Curiosities />
    </>
  );
}

export default App;
