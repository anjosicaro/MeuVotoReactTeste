import styles from "../CSS/Infos.module.css";

function Infos(){
  return (
    <section className={styles.corpo}>
      <div className={styles.texto}>
        <h1>A importancia de votar</h1>
        <p>Inserido em um realidade completa de ignorancia <span className={styles.span}>"é de extrema importância"</span> se manter atualizado
        <span className={styles.span}> verdadeiras</span>  vamos fazer uma política justa</p>
      </div>
      <div className={styles.container}>
        <div className={styles.quadro}>
        <img src="https://cdn-icons-png.flaticon.com/512/3099/3099186.png"alt="provisorio" className={styles.icones} />
          <hr />
          <h3>Porque é importante votar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid tempore quos ratione ducimus quisquam vitae assumenda dicta
            nam mollitia labore consequatur veritatis fugiat a exercitationem
            doloremque nisi, nesciunt molestiae!
          </p>
        </div>
        <div className={styles.quadro}>
        <img src="https://cdn-icons-png.flaticon.com/512/5692/5692286.png" alt="provisorio" className={styles.icones} />
        <hr />
          <h3>Porque é importante votar</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid tempore quos ratione ducimus quisquam vitae assumenda dicta
            nam mollitia labore consequatur veritatis fugiat a exercitationem
            doloremque nisi, nesciunt molestiae!
          </p>
        </div>
        <div className={styles.quadro}>
        <img src="https://cdn-icons-png.flaticon.com/512/3080/3080467.png" alt="provisorio" className={styles.icones} />
        <hr />
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
