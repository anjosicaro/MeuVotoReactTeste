import styles from "../CSS/Home.module.css";
import fotoHomem from "../images/homem.png";
import Candidatos from "./Candidatos";
import Infos from "./Infos";
import Recomendacao from "./Recomendacao";

function Home({ Candidatoshref }) {
  return (
    <>
      <section className={styles.corpo}>
        <div className={styles.texto}>
          <h1>
            {" "}
            Vote consciente e faça do <span>Brasil</span> um lugar melhor{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            laborum eos voluptates aliquam voluptatem distinctio unde veritatis
            omnis officia! Ut quod ipsa ipsam voluptate a placeat distinctio
            unde hic cupiditate.
          </p>
        </div>

        <div className={styles.circle}>
          <img src={fotoHomem} alt="Moço com titulos" />
          <div>
            {" "}
            Vote consciente e faça do <span>Brasil</span> um lugar melhor{" "}
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
