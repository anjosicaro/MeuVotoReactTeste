import { Link } from 'react-router-dom'
import styles from '../CSS/Footer.module.css'
import logo from '../images/logo.png'
function Footer(){
    return(
        <footer className={styles.rodape}>
         <img src={logo} alt="logo" />

            <h1>texto</h1>
         
            

        </footer>
    )
}
export default Footer