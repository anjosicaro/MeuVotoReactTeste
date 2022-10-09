import { Link } from 'react-router-dom'
import styles from '../CSS/Footer.module.css'
import logo from '../images/logoluan.png'
function Footer(){
    return(
        <footer className={styles.rodape}>
         <div className={styles.social}>
            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="insta" className={styles.icones}/></a>
            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png" alt="facebook" className={styles.icones}/></a>
            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma" className={styles.icones}/></a>
         </div>
         <ol className={styles.list}>
            <li>Home</li>
            <li>Informativo</li>
            <li>Candidatos</li>
            <li>Recomendações</li>
         </ol>
         <hr />
        <div className={styles.logo}>
         <img src={logo} alt="logo" />
        </div>
        </footer>
    )
}
export default Footer