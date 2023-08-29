/* eslint-disable no-unused-vars */
import "./styles.scss";
import menu from "../../assets/img/icons/menu.png";

const NavBar = () => {
  const openMenu = () => {

    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
    
  };

  return (
    <header>
      <h1>TSS</h1>

      <img src={menu} className="menu-mobile" onClick={openMenu} />

      <nav className="nav">
        <ul>
          <li>
            <a href="#planets">Planetas</a>
          </li>
          <li>
            <a href="#moon">Lua</a>
          </li>
          <li>
            <a href="#satelite">Satelites</a>
          </li>
          <li>
            <a href="#station">Estacao Espacial</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
