import styles from "../CSS/Lula.module.css";
import LulaFoto from "../images/Lula.png";
import CarouselFadeExample from "./Carousel.Props";
import noticia1 from '../images/bg.png'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h1>Luiz Inácio <span className={styles.span}>Lula</span> da Silva</h1>
        <h4>Partido dos Trabalhadores (PT) - 13</h4>
        <div className={styles.timeline}>timeline</div>
        <CarouselFadeExample 
        imagem={noticia1}
        titulo={"aparece ai"}
        texto={"descrição da noticias"}/>
        
      </div>
      <div className={styles.direita}>
        <div className={styles.grafico}>graficos</div>
        <div className={styles.ficha}>fichalimpaousuja</div>
      </div>
    </main>
  );
}

export default Lula;
