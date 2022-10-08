import logo from '../images/logo.png'
import styles from '../CSS/Header.module.css'
import { Link } from 'react-router-dom'
function Header(){
    return(
        <header className={styles.corpo} >
         <Link to="/">
         <img src={logo} alt="logo" className={styles.logo}/>
         </Link>
         
           <nav className={styles.menu}>
           <ul>
                <li>Home</li>
            
                <li>Informações</li>
            
                <li> Cnadidatos </li>
                <Link to="SobreNos">  <li>Sobre nós</li> </Link>
               
            </ul>
           </nav>
        </header>
    )
}

export default Header