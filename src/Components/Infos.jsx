import styles from "../CSS/Infos.module.css";
import icon from '../images/logo.png'
function Infos() {
  return (
    <section className={styles.corpo}>
      <div className={styles.texto}>
        <h1>Se informe contra Fake News</h1>
        <p>Na Era da <span className={styles.span}>"pós verdade"</span>  somente com informações 
        <span className={styles.span}> verdadeiras</span>  vamos fazer uma política justa</p>
      </div>
      <div className={styles.container}>
        <div className={styles.quadro}>
        <img src={icon} alt="provisorio" />

          <h3>Porque é importante votar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid tempore quos ratione ducimus quisquam vitae assumenda dicta
            nam mollitia labore consequatur veritatis fugiat a exercitationem
            doloremque nisi, nesciunt molestiae!
          </p>
        </div>
        <div className={styles.quadro}>
          <h3>Porque é importante votar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid tempore quos ratione ducimus quisquam vitae assumenda dicta
            nam mollitia labore consequatur veritatis fugiat a exercitationem
            doloremque nisi, nesciunt molestiae!
          </p>
        </div>
        <div className={styles.quadro}>
          <h3>Porque é importante votar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid tempore quos ratione ducimus quisquam vitae assumenda dicta
            nam mollitia labore consequatur veritatis fugiat a exercitationem
            doloremque nisi, nesciunt molestiae!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Infos;
