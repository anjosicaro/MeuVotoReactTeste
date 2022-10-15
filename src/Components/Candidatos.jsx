import styles from "../CSS/Candidatos.module.css";
import Lula from "../images/Lula.png";
import Bolsonaro from "../images/Bolsonaro.png";

function Candidatos() {
  return (
    <section className={styles.corpo}>
      <div className={styles.texto}>
        <h1>
          Candidatos para o <span>segundo</span> turno
        </h1>
        <p>Se aprofunde nessa epoca eleitoral. Entenda e conheça os diversos temas sociais relevantes durante esse período de intensos debates e formação de opinião </p>
      </div>
      <div className={styles.Containercandidato}>
        <div className={styles.esquerda}>
          <img src={Lula} alt="Lula" className={styles.imgLula} />
          <a href="/Lula" className={styles.button}> Saiba mais!</a>
        </div>
        <div className={styles.direita}>
          <img src={Bolsonaro} alt="Bolsonaro" className={styles.imgBolsonaro} />
          <a href="/Bolsonaro" className={styles.button}> Saiba mais!</a>
        </div>
      </div>

    </section>
  );
}
export default Candidatos;
