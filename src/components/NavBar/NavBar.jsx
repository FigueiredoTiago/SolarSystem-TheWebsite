import './styles.scss';

const NavBar = () => {
  return (
    <header>
      <h1>TSS</h1>

      <nav>
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
}

export default NavBar