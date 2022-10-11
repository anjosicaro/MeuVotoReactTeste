import { Link } from 'react-router-dom'
import styles from '../CSS/Footer.module.css'
import logo from '../images/logo.png'
function Footer(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.container}>
                <div className={styles.linha}>
                    <div className={styles.colunas}>
                        <h4>Sobre nós</h4>
                        <ul>
                            {/* <li><a href="#">home</a></li>
                            <li><a href="#">Politica de Privacidade</a></li>
                            <li><a href="#">Parceiros</a></li> */}
                        </ul>
                    </div>
                    <div className={styles.colunas}>
                        <h4>Acessibilidade</h4>
                        <ul>
                            {/* <li><a href="#">Darkmode</a></li>
                            <li><a href="#">A+</a></li>
                            <li><a href="#">Daltônico</a></li>
                            <li><a href="#">Padrão</a></li> */}
                        </ul>
                    </div>
                    <div className={styles.colunas}>
                        <h4>Acompanhe nos</h4>
                        <div className={styles.midias}>
                            {/* <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/739/739237.png" alt="fac" /></a>
                            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png" alt="inst"/></a>
                            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968704.png" alt="fig" /></a> */}
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
export default Footer