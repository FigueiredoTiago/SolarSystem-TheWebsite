import "./styles.scss";
import system from "../../assets/img/sistemSolar.svg";

const SolarSystem = () => {
  return (
    <section className="SolarSystem-section container" id="solar-system">
      <section className="left-section grid-6">
        <h1 className="title">O Sistema Solar</h1>
        <p>
          - O Sistema Solar é uma estrutura complexa formada por oito planetas
          que orbitam o Sol.
        </p>
        <p>
          - Seu ordenamento inicia-se a partir do Sol e obedece à seguinte
          ordem: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e
          Netuno.
        </p>
        <p>
          - Seus planetas apresentam características distintas e são
          classificados em rochosos e gasosos.
        </p>
        <p>
          - Os quatro planetas rochosos são Mercúrio, Vênus, Terra e Marte; já
          os quatro gasosos são Júpiter, Saturno, Urano e Netuno.
        </p>
        <p>
          - Eles realizam movimentos em torno de si mesmos (rotação) e em torno
          do Sol (translação).
        </p>
        <p>
          - Atualmente, Plutão é classificado como planeta-anão em razão do seu
          tamanho diminuto quando comparado aos demais planetas do sistema.
        </p>
      </section>

      <section className="right-section grid-6">
        <img src={system} alt="" />
      </section>
    </section>
  );
};

export default SolarSystem;
