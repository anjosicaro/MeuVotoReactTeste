import styles from "../CSS/Home.module.css";
import fotoHomem from "../images/bg.png";
import Candidatos from "./Candidatos";
import Infos from "./Infos";
import Recomendacao from "./Recomendacao";

function Home() {
  return (
    <>
      <section className={styles.corpo}>
        <div className={styles.texto}>
          <h1>
            {" "}
            Vote consciente e faça do <span>Brasil</span> um lugar melhor{" "}
          </h1>
          <p>
            A plataforma “Meu voto” foi desenvolvida com o objetivo de conscientizar e informar aos eleitores brasileiros a importância de saber se posicionar diante de uma eleição entendendo os valores e propostas de cada candidato.
          </p>
        </div>

        <div className={styles.imgTexto}>
          <div className={styles.circle}>

            <img src={fotoHomem} alt="Homem negro segurando titulo" className={styles.FotoHomem} />
          </div>
          <div className={styles.textoResponsivo}>
            <p>
              Vote consciente e faça do <span>Brasil</span> um lugar melhor
            </p>
          </div>
        </div>
      </section>

      <Infos />
      <Candidatos />
      <Recomendacao />

    </>
  );
}
export default Home;
