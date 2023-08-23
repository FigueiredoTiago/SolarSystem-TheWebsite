import mars from "../../assets/img/planets/mars.png";
import "./styles.scss";

const BoxSlide = () => {
  return (
    <div className="box-slide">

      <img src={mars} alt="Planeta do Sistema Solar" />


      <p>
        Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema
        Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes
        é descrito como o Planeta Vermelho, porque o óxido de ferro
        predominante em sua superfície lhe dá uma aparência avermelhada.
      </p>
    </div>
  );
};

export default BoxSlide;
