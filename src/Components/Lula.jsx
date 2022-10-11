import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";
import LulaHist from "./LulaHist";
import LulaSlide from "./LulaSlide";

function Lula() {
  return (
  <>
    <section className={styles.corpo}>
      <div className={styles.Container}>
        <div className={styles.fundoImagem}>
          <img src={LulaFoto} alt="Foto Lula" />
        </div>
        <div className={styles.Perfil}>
          <h1>Luiz Inacio <span className={styles.span}>Lula</span> da Silva</h1>
          <h4>Partido dos <span className={styles.span}>Trabalhadores</span> </h4>
          <p>Conheça a trajetoria politica <br /> do candidato e ex presidente </p>
        </div>
      </div>
    </section>
    <LulaHist />
    <LulaSlide />
  </>
  );
}
export default Lula;
