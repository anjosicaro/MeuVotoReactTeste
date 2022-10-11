import logo from "../images/logo.png";
import styles from "../CSS/Header.module.css";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className={styles.corpo}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

      <nav className={styles.menu}>
        <ul>
        <Link to="/">
        <li className={styles.menuLink}>Página Inicial</li>
        </Link>
          <Link to="Infos">
          <li className={styles.menuLink}>Informações</li>
          </Link>

          <Link to="Candidatos">
            <li className={styles.menuLink}> Candidatos </li>
          </Link>
          <Link to="Recomendacao">
            <li className={styles.menuLink}>Recomendações</li>
          </Link>
        </ul>
      </nav>
      <div className={styles.menuHamburguer}>menu hamburguer</div>
    </header>
  );
}

export default Header;
