import styles from "../CSS/Infos.module.css";

function Infos(){
  return (
    <section className={styles.corpo}>
      <div className={styles.texto}>
        <h1>A importância de votar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis quasi <span className={styles.span}>tenetur</span> tenetur, numquam sapiente, ex delectus distinctio dolores animi impedit, optio nihil aliquid explicabo veniam doloribus? Enim rerum nostrum quo.</p>
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
