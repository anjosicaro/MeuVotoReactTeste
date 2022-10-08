import styles from  '../CSS/Candidatos.module.css'
import Lula from '../images/Lula.png'
import Bolsonaro from '../images/Bolsonaro.png'
function Candidatos(){
    return(
        <section className={styles.corpo}>
            <div className={styles.texto}>
            <h1>Candidatos para o <span>segundo</span>  turno</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum iusto earum voluptatum vero. Eveniet iste culpa, aliquam illum molestias, quas beatae quis sint atque dolor eos ipsa repudiandae asperiores.</p>
            </div>
            <div className={styles.esquerda}>
                <img src={Lula} alt="Lula" className={styles.imgLula}/>
                
                <a href="../Components/Lula" className={styles.botaoEsquerdo}>Saiba Mais</a>

            </div>
            <div className={styles.direita}>
                <img src={Bolsonaro} alt="Bolsonaro" className={styles.imgBolsonaro}/>
                <a href="#" className={styles.botaoDireito}>Saiba Mais</a>
            </div>
        </section>
    )
}
export default Candidatos