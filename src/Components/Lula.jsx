import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";

function Lula() {
  return (
    <main className={styles.candidatos}>
      <div className={styles.esquerda}>
        <div className={styles.fundoImagem}>
          <img src={LulaFoto} alt=""/>
        </div>
        <div className={styles.saldo}>
          fazer um card
        </div>
      </div>
      <div className={styles.centro}>
        <h1>Luiz Inácio <span>Lula</span> da Silva</h1>
        <h4>Partido Liberal (PL) -22</h4>
        <div className={styles.timeline}>timeline</div>
        <div className={styles.slide}>slide</div>
      </div>
      <div className={styles.direita}>
        <div className={styles.grafico}>graficos</div>
        <div className={styles.ficha}>fichalimpaousuja</div>
      </div>
    </main>
  );
}

export default Lula;
