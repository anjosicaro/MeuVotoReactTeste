import styles from "../CSS/Infos.module.css";

function Infos(){
  return (
    <section className={styles.corpo}>
      <div className={styles.texto}>
        <h1>A importância de votar</h1>
        <p>Você sabia que segundo a constituição federal todo poder emana do povo? Que o exerce através do voto. Cada voto nesse país tem o mesmo peso, quando você deixa de votar está abdicando do seu direito de cidadão, de opinar sobre quem governará. Por isso é necessário ter acesso a informações verdadeiras sobre quem estamos votando.<span className={styles.span}></span> </p>
      </div>
      <div className={styles.container}>
        <div className={styles.quadro}>
        <img src="https://cdn-icons-png.flaticon.com/512/3099/3099186.png"alt="provisorio" className={styles.icones} />
          <hr />
          <h3>O voto é secréto.</h3>
          <p>
              Evite envolver-se em discussões desnecessárias,  é de extrema importância quando tratamos de eleição, não deixarmos as emoções falarem mais alto.
          </p>
        </div>
        <div className={styles.quadro}>
        <img src="https://cdn-icons-png.flaticon.com/512/5692/5692286.png" alt="provisorio" className={styles.icones} />
        <hr />
          <h3>Fake News</h3>
          <p>
            Quando buscando informações sobre candidatos, opte por grandes veículos de notícias, busque por um que tenha um compromisso com a verdade.
          </p>
        </div>
        <div className={styles.quadro}>
        <img src="https://cdn-icons-png.flaticon.com/512/3080/3080467.png" alt="provisorio" className={styles.icones} />
        <hr />
          <h3>O que buscar</h3>
          <p>
            Quando estiver procurando sobre um candidato, fique atento a critérios como, propostas, declaração de renda, histórico político, etc. Fique atento a todas notícias futuras e passadas sobre o candidato.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Infos;
