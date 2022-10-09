import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.Pagina.png";

function Lula() {
  return (
    <section className={styles.corpo}>
      <div className={styles.circulo}>
        <img src={LulaFoto} alt="Lula" className={styles.LulaFoto} />
      </div>
      <div className={styles.texto}>
        <h1>Luiz Inacio <span className={styles.span}>Lula</span>  da Silva</h1>
        <h4>Partido dos <span className={styles.span}>Trabalhadores</span></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis quisquam animi praesentium, tempore laborum tempora possimus accusamus, molestiae repellat nisi velit pariatur veritatis, id laboriosam adipisci maiores. Rerum, fugit?</p>

      </div>
    </section>
  );
}

export default Lula;
