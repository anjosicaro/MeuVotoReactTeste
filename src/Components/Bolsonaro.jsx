import styles from '../CSS/Bolsonaro.module.css'
import BolsonaroFoto from '../images/Bolsonaro.pagina.png'
function Bolsonaro(){
    return(
        <section className={styles.corpo}>
            <div className={styles.texto}>
                <h1>Jair Messias <span>Bolsonaro</span></h1>
                <p>Partido <span>Liberal</span> </p>
            </div>
            <div className={styles.circulo}>
                <img src={BolsonaroFoto} alt="" className={styles.BolsonaroFoto}/>
            </div>

            <div className={styles.slideContainer}>
                <div className={styles.slide}></div>
                <div className={styles.slide}></div>
                <div className={styles.slide}></div>
                <div className={styles.slide}></div>
                <div className={styles.slide}></div>
            </div>

        </section>
    )
}
export default Bolsonaro