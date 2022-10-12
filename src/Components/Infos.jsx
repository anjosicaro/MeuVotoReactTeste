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
        <img src="https://img.freepik.com/vetores-gratis/conceito-de-processo-de-votacao-isometrica_1284-38258.jpg?w=740&t=st=1665610801~exp=1665611401~hmac=47a02a26efe97a632c46c9ac84fadb93a8f1584a44eb3a006622612f84d2a4a1"alt="provisorio" className={styles.icones} />
          <hr />
          <h3>O voto é secréto.</h3>
          <p>
              Evite envolver-se em discussões desnecessárias,  é de extrema importância quando tratamos de eleição, não deixarmos as emoções falarem mais alto.
          </p>
        </div>
        <div className={styles.quadro}>
        <img src="https://img.freepik.com/vetores-gratis/chefe-manipular-um-empregado_1133-221.jpg?w=740&t=st=1665610964~exp=1665611564~hmac=3368c8dd765470176619a14af2d2e86a0337dd68201b56172d27bb20fb81c0d3" alt="provisorio" className={styles.icones} />
        <hr />
          <h3>Fake News</h3>
          <p>
            Quando buscando informações sobre candidatos, opte por grandes veículos de notícias, busque por um que tenha um compromisso com a verdade.
          </p>
        </div>
        <div className={styles.quadro}>
        <img src="https://img.freepik.com/vetores-gratis/proibir-a-influencia-das-contribuicoes-secretas-de-dinheiro-sujo-na-composicao-dos-desenhos-animados-do-processo-eleitoral_1284-62670.jpg?w=1060&t=st=1665610653~exp=1665611253~hmac=7419f4f185e74fd35180aa3da4555d812da71f3df5dfc8ecd6df6485afa98acf" alt="provisorio" className={styles.icones} />
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
