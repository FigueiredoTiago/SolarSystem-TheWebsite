/* eslint-disable react/prop-types */
import "./styles.scss";


const BoxSlide = ({ name, description, img }) => {
  return (
    <div className="box-slide">

      <div className="box-img" style={{ backgroundImage: `url(${img})`}} ></div>

      <div className="info-text">
        <h2 className="title">{name}</h2>
        <p>{description}</p>
      </div>

    </div>
  );
};

export default BoxSlide;
