import styles from '../CSS/Bolsonaro.module.css'
import BolsonaroFoto from '../images/Bolsonaro.png'
import BolsonaroHist from './BolsonaroHist'
import BolsonaroSlide from './BolsonaroSlide'

function Bolsonaro() {
 return(
  <>
    <section className={styles.corpo}>
      <div className={styles.Container}>
      <div className={styles.dados}>
          <div>grafico</div>
          <div>dados</div>
        </div>
       
        <div className={styles.Perfil}>
          <h1>Jair Messias <span>Bolsonaro</span></h1>
          <h4>Partido dos <span>Liberal - 22</span> </h4>
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