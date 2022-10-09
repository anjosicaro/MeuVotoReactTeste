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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
          iusto earum voluptatum vero. Eveniet iste culpa, aliquam illum
          molestias, quas beatae quis sint atque dolor eos ipsa repudiandae
          asperiores.
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
