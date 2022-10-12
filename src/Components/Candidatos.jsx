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
        <p>
        Os candidatos Luiz Inácio Lula da Silva (PT) e Jair Messias Bolsonaro (PL) vão disputar o segundo turno para a Presidência da República nas Eleições 2022, Lula obteve 47,91% (55.166.851) e Bolsonaro 43,65% (50.261.216) dos votos analisados no primeiro turno (02/10/2022).
        </p>
      </div>
      <div className={styles.Containercandidato}>
      <div className={styles.esquerda}>
        <img src={Lula} alt="Lula" className={styles.imgLula} />

        <a href="/Lula" className={styles.botaoEsquerdo}>
          Saiba mais
        </a>
      </div>
      <div className={styles.direita}>
        <img src={Bolsonaro} alt="Bolsonaro" className={styles.imgBolsonaro} />
        <a href="/Bolsonaro" className={styles.botaoDireito}>
          Saiba Mais
        </a>
      </div>
      </div>

    </section>
  );
}
export default Candidatos;
