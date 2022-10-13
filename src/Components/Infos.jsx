import styles from "../CSS/Infos.module.css";

function Infos() {
  return (
    <section className={styles.corpo}>
      <div className={styles.texto}>
        <h1>A importância de votar</h1>
        <p>Você sabia que segundo a constituição federal todo poder emana do povo? Que o exerce através do voto. Cada voto nesse país tem o mesmo peso, quando você deixa de votar está abdicando do seu direito de cidadão, de opinar sobre quem governará. Por isso é necessário ter acesso a informações verdadeiras sobre quem estamos votando.<span className={styles.span}></span> </p>
      </div>
      <div className={styles.container}>
        <div className={styles.quadro}>
          <div className={styles.fundoimagem}>
            <img src="https://img.freepik.com/vetores-gratis/conceito-de-processo-de-votacao-isometrica_1284-38258.jpg?w=740&t=st=1665610801~exp=1665611401~hmac=47a02a26efe97a632c46c9ac84fadb93a8f1584a44eb3a006622612f84d2a4a1" alt="provisorio" className={styles.icones} />
          </div>
          <h3>O voto é secréto.</h3>
          <p>
            Evite envolver-se em discussões desnecessárias,  é de extrema importância quando tratamos de eleição, não deixarmos as emoções falarem mais alto.
          </p>
        </div>
        <div className={styles.quadro}>
          <div className={styles.fundoimagem}>
            <img src="https://img.freepik.com/vetores-gratis/conceito-de-processo-de-votacao-isometrica_1284-38258.jpg?w=740&t=st=1665610801~exp=1665611401~hmac=47a02a26efe97a632c46c9ac84fadb93a8f1584a44eb3a006622612f84d2a4a1" alt="provisorio" className={styles.icones} />
          </div>
          <h3>Fake News</h3>
          <p>
            Quando buscando informações sobre candidatos, opte por grandes veículos de notícias, busque por um que tenha um compromisso com a verdade.
          </p>
        </div>
        <div className={styles.quadro}>
          <div className={styles.fundoimagem}>
            <img src="https://img.freepik.com/vetores-gratis/conceito-de-processo-de-votacao-isometrica_1284-38258.jpg?w=740&t=st=1665610801~exp=1665611401~hmac=47a02a26efe97a632c46c9ac84fadb93a8f1584a44eb3a006622612f84d2a4a1" alt="provisorio" className={styles.icones} />
          </div>
          <h3>O que buscar</h3>
          <p>
            Quando estiver procurando sobre um candidato, fique atento a critérios como, propostas, declaração de renda, histórico político.Fique atento a todas notícias futuras e passadas sobre o candidato.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Infos;
