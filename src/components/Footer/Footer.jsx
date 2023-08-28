/* eslint-disable react/no-unescaped-entities */
import "./styles.scss";

import github from "../../assets/img/icons/github.png";
import linkedin from "../../assets/img/icons/linkedin.png";

const Footer = () => {
  return (
    <footer>
      <div className="content-footer">
        <p>
          Explorando os Mistérios do Sistema Solar | Criado com Amor e
          Fascinação pelo Espaço.
        </p>

        <p>
          "As estrelas nos lembram da vastidão do desconhecido e do poder da
          exploração. Continue olhando para cima!"
        </p>

        <div className="icons">
          <a
            href="https://github.com/figueiredotiago"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} />
          </a>

          <a
            href="https://www.linkedin.com/in/tf-tiagofigueiredo/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} />
          </a>
        </div>

        <p>
          <a
            href="https://website-portfolio-tf.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="portfolio"
          >
            ©Tiago Figueiredo WebDeveloper
          </a>{" "}
          2023. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
