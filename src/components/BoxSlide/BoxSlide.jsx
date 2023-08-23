/* eslint-disable react/prop-types */
import "./styles.scss";

const BoxSlide = ({name, description, img}) => {
  return (
    <div className="box-slide">

      <img src={img} alt="Planeta do Sistema Solar" />


      <div className="info-text">
        <h2 className="title">{name}</h2>
        <p>
          {description}
        </p>
      </div>

    </div>
  );
};

export default BoxSlide;
