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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            laborum eos voluptates aliquam voluptatem distinctio unde veritatis
            omnis officia! Ut quod ipsa ipsam voluptate a placeat distinctio
            unde hic cupiditate.
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
