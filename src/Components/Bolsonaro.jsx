import styles from '../CSS/Bolsonaro.module.css'
import BolsonaroFoto from '../images/Bolsonaro.png'
import BolsonaroHist from './BolsonaroHist'
import BolsonaroSlide from './BolsonaroSlide'

function Bolsonaro() {
 return(
  <>
    <section className={styles.corpo}>
      <div className={styles.Container}>
       
        <div className={styles.Perfil}>
          <h1>Jair Messias <span>Bolsonaro</span></h1>
          <h4>Partido dos <span className={styles.span}>Trabalhadores - 13</span> </h4>
          <p>Conheça a trajetoria politica <br /> do candidato e atual presidente </p>
        </div>
        <div className={styles.fundoImagem}>
          <img src={BolsonaroFoto} alt="Foto Bolsonaro" />
        </div>
      </div>
    </section>
    <BolsonaroHist />
    <BolsonaroSlide />
  </>
  );
 
}

export default Bolsonaro;