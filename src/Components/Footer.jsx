import { Link } from 'react-router-dom'
import styles from '../CSS/Footer.module.css'
import logo from '../images/logo.png'

function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.container}>
                <div className={styles.linha}>
                    <div className={styles.colunas}>
                        <h4>Sobre nós</h4>
                        <nav>
                            <ul>
                                <Link to='/'>
                                    <li>Página Inicial</li>
                                </Link>
                                <Link to="/Infos">
                                    <li>Politica de Privacidade</li>
                                </Link>
                                <Link to="/Recomendacao">
                                    <li>Parceiros</li>
                                </Link>
                            </ul>

                        </nav>
                    </div>
                    <div className={styles.colunas}>
                        <h4>Acompanhe nos</h4>
                        <div className={styles.midias}>
                            <img src="https://cdn-icons-png.flaticon.com/512/739/739237.png" alt="fac" />
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="inst" />
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968704.png" alt="fig" />
                        </div>
                    </div>
                    <div className={styles.colunas}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;